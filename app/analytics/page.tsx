import Sidebar from "@/components/Sidebar";

export default function AnalyticsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">

        {/* Header */}
        <div className="bg-purple-700 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold">
            Analytics Dashboard
          </h1>
        </div>

        <div className="p-8">

          {/* Title */}
          <h2 className="text-2xl font-bold text-black mb-6">
            SaaS Platform Analytics
          </h2>

          {/* KPI Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-black font-semibold">
                Monthly Revenue
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-3">
                $12,450
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-black font-semibold">
                Active Users
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-3">
                1,248
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-black font-semibold">
                Subscriptions
              </h3>

              <p className="text-4xl font-bold text-purple-600 mt-3">
                532
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-black font-semibold">
                Growth Rate
              </h3>

              <p className="text-4xl font-bold text-orange-600 mt-3">
                18%
              </p>
            </div>

          </div>

          {/* Revenue Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border mb-8">

            <h2 className="text-2xl font-bold text-black mb-6">
              Revenue Trend
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-black font-medium mb-1">
                  January - $3,000
                </p>
                <div className="bg-green-500 h-6 rounded w-1/4"></div>
              </div>

              <div>
                <p className="text-black font-medium mb-1">
                  February - $6,000
                </p>
                <div className="bg-green-500 h-6 rounded w-2/4"></div>
              </div>

              <div>
                <p className="text-black font-medium mb-1">
                  March - $9,000
                </p>
                <div className="bg-green-500 h-6 rounded w-3/4"></div>
              </div>

              <div>
                <p className="text-black font-medium mb-1">
                  April - $12,450
                </p>
                <div className="bg-green-500 h-6 rounded w-full"></div>
              </div>

            </div>

          </div>

          {/* Top Plans */}
          <div className="bg-white p-6 rounded-xl shadow-lg border">

            <h2 className="text-2xl font-bold text-black mb-6">
              Top Subscription Plans
            </h2>

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-black">Plan</th>
                  <th className="text-left p-3 text-black">Users</th>
                  <th className="text-left p-3 text-black">Revenue</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-3 text-black">Enterprise</td>
                  <td className="p-3 text-black">150</td>
                  <td className="p-3 text-green-600">$7,500</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 text-black">Pro</td>
                  <td className="p-3 text-black">280</td>
                  <td className="p-3 text-green-600">$3,500</td>
                </tr>

                <tr>
                  <td className="p-3 text-black">Basic</td>
                  <td className="p-3 text-black">102</td>
                  <td className="p-3 text-green-600">$1,450</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>
    </div>
  );
}