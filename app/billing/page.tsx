import Sidebar from "../../components/Sidebar";

export default function BillingPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">

        {/* Header */}
        <div className="bg-emerald-700 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold">
            Billing & Invoices
          </h1>
        </div>

        <div className="p-8">

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-black font-bold">
                Monthly Revenue
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-3">
                $12,450
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-black font-bold">
                Paid Invoices
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-3">
                184
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-black font-bold">
                Pending Payments
              </h3>

              <p className="text-4xl font-bold text-orange-600 mt-3">
                12
              </p>
            </div>

          </div>

          {/* Invoice Table */}
          <div className="bg-white rounded-xl shadow-lg border p-6">

            <h2 className="text-2xl font-bold text-black mb-6">
              Recent Invoices
            </h2>

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-black">Invoice ID</th>
                  <th className="text-left p-3 text-black">Customer</th>
                  <th className="text-left p-3 text-black">Amount</th>
                  <th className="text-left p-3 text-black">Status</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-3 text-black">INV-1001</td>
                  <td className="p-3 text-black">John Doe</td>
                  <td className="p-3 text-black">$99</td>
                  <td className="p-3 text-green-600 font-bold">Paid</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 text-black">INV-1002</td>
                  <td className="p-3 text-black">Sarah Smith</td>
                  <td className="p-3 text-black">$29</td>
                  <td className="p-3 text-green-600 font-bold">Paid</td>
                </tr>

                <tr>
                  <td className="p-3 text-black">INV-1003</td>
                  <td className="p-3 text-black">Michael Lee</td>
                  <td className="p-3 text-black">$99</td>
                  <td className="p-3 text-orange-600 font-bold">Pending</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>
    </div>
  );
}