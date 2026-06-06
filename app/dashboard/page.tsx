import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">

        {/* Header */}
        <div className="bg-blue-600 text-white p-6 shadow">
          <h1 className="text-3xl font-bold">
            SaaS Dashboard
          </h1>
        </div>

        {/* Welcome */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-black">
            Welcome Back 👋
          </h2>

          <p className="text-gray-700 mt-2">
            Here is an overview of your SaaS platform performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 px-8">

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-gray-600 font-medium">
              Total Users
            </h3>

            <p className="text-4xl font-bold text-black mt-2">
              125
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-gray-600 font-medium">
              Revenue
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-2">
              $4,250
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-gray-600 font-medium">
              Active Subscriptions
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-2">
              89
            </p>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="p-8">

          <div className="bg-white rounded-xl shadow-lg p-6 border">

            <h2 className="text-2xl font-bold text-black mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-black">

              <li className="p-3 bg-gray-50 rounded">
                ✅ New user registered
              </li>

              <li className="p-3 bg-gray-50 rounded">
                ✅ Pro plan purchased
              </li>

              <li className="p-3 bg-gray-50 rounded">
                ✅ Invoice generated
              </li>

              <li className="p-3 bg-gray-50 rounded">
                ✅ Subscription renewed
              </li>

            </ul>

          </div>

        </div>

      </main>

    </div>
  );
}