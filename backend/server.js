const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Test Database Connection
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Database Connected",
      time: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get All Plans
app.get("/plans", async (req, res) => {
  try {
    const plans = await pool.query(
      "SELECT * FROM plans ORDER BY id"
    );

    res.json(plans.rows);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Register User
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashedPassword]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: newUser.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user.rows[0].id,
        email: user.rows[0].email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.rows[0].id,
        name: user.rows[0].name,
        email: user.rows[0].email,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
// Subscribe User To Plan
// Subscribe User To Plan
app.post("/subscribe", async (req, res) => {
  try {
    const { user_id, plan_id } = req.body;

    const existingSubscription = await pool.query(
      "SELECT * FROM subscriptions WHERE user_id = $1",
      [user_id]
    );

    if (existingSubscription.rows.length > 0) {
      await pool.query(
        "UPDATE subscriptions SET plan_id = $1 WHERE user_id = $2",
        [plan_id, user_id]
      );

      return res.json({
        message: "Plan updated successfully",
      });
    }

    await pool.query(
      `INSERT INTO subscriptions (user_id, plan_id)
       VALUES ($1, $2)`,
      [user_id, plan_id]
    );

    res.status(201).json({
      message: "Subscription successful",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
// Get User Subscription
app.get("/subscription/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await pool.query(
      `SELECT plans.name, plans.price
       FROM subscriptions
       JOIN plans ON subscriptions.plan_id = plans.id
       WHERE subscriptions.user_id = $1
       ORDER BY subscriptions.id DESC
       LIMIT 1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.json({
        plan: "No Plan",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
// Admin Dashboard Stats
app.get("/admin/stats", async (req, res) => {
  try {
    const users = await pool.query(
      "SELECT COUNT(*) FROM users"
    );

    const plans = await pool.query(
      "SELECT COUNT(*) FROM plans"
    );

    const subscriptions = await pool.query(
      "SELECT COUNT(*) FROM subscriptions"
    );

    res.json({
      totalUsers: users.rows[0].count,
      totalPlans: plans.rows[0].count,
      totalSubscriptions: subscriptions.rows[0].count,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get All Users
app.get("/admin/users", async (req, res) => {
  try {
    const users = await pool.query(
      "SELECT id, name, email FROM users ORDER BY id"
    );

    res.json(users.rows);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});