"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

export default function AdminPage() {
  const [stats, setStats] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchStats();
    fetchUsers();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        "https://saas-platform-backend-6zku.onrender.com/admin/stats"
      );

      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://saas-platform-backend-6zku.onrender.com/admin/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">
        <div className="bg-purple-700 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>
        </div>

        <div className="p-8">

          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-lg font-semibold text-gray-700">
                Total Users
              </h2>

              <p className="text-4xl font-bold text-blue-600 mt-2">
                {stats?.totalUsers || 0}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-lg font-semibold text-gray-700">
                Total Plans
              </h2>

              <p className="text-4xl font-bold text-green-600 mt-2">
                {stats?.totalPlans || 0}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-lg font-semibold text-gray-700">
                Total Subscriptions
              </h2>

              <p className="text-4xl font-bold text-purple-600 mt-2">
                {stats?.totalSubscriptions || 0}
              </p>
            </div>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-black mb-6">
              Registered Users
            </h2>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-black">
                    ID
                  </th>

                  <th className="text-left p-3 text-black">
                    Name
                  </th>

                  <th className="text-left p-3 text-black">
                    Email
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b"
                  >
                    <td className="p-3 text-black">
                      {user.id}
                    </td>

                    <td className="p-3 text-black">
                      {user.name}
                    </td>

                    <td className="p-3 text-black">
                      {user.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </div>
      </main>
    </div>
  );
}