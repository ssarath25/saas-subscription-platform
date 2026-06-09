"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

export default function PlansPage() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get(
        "https://saas-platform-backend-6zku.onrender.com/plans"
  );
     

      setPlans(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubscribe = async (planId: number) => {
    try {
      const userData = localStorage.getItem("user");

      if (!userData) {
        alert("Please login first");
        return;
      }

      const user = JSON.parse(userData);

      const response = await axios.post(
        "https://saas-platform-backend-6zku.onrender.com/subscribe",
        {
          user_id: user.id,
          plan_id: planId,
        }
      );

      alert(response.data.message);
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
        "Subscription failed"
      );
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">
        <div className="bg-indigo-700 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold">
            Subscription Plans
          </h1>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-black mb-8">
            Choose the Perfect Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-xl shadow-lg border p-6"
              >
                <h3 className="text-2xl font-bold text-black mb-4">
                  {plan.name}
                </h3>

                <p className="text-4xl font-bold text-indigo-600 mb-6">
                  ₹{plan.price}
                  <span className="text-lg text-gray-700">
                    /month
                  </span>
                </p>

                <p className="text-black mb-6">
                  {plan.description}
                </p>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700"
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}