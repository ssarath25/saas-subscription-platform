"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser);

      fetchSubscription(parsedUser.id);
    }
  }, [router]);

  const fetchSubscription = async (userId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/subscription/${userId}`
      );

      setPlan(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">
            Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {user && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">
              Welcome, {user.name} 👋
            </h2>

            <p className="text-black mb-2">
              Email: {user.email}
            </p>

            <p className="text-black font-semibold">
              Current Plan:{" "}
              <span className="text-indigo-600">
                {plan?.name || "No Plan"}
              </span>
            </p>

            {plan?.price !== undefined && (
              <p className="text-black mt-2">
                Monthly Price: ₹{plan.price}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}