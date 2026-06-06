import Sidebar from "@/components/Sidebar";

export default function AdminPage() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">

        <div className="bg-red-600 text-white p-6">
          <h1 className="text-3xl font-bold">
            Admin Panel
          </h1>
        </div>

        <div className="p-8">

          <h2 className="text-2xl font-bold text-black mb-6">
            User Management
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-3 text-black">
                    Name
                  </th>

                  <th className="text-left p-3 text-black">
                    Email
                  </th>

                  <th className="text-left p-3 text-black">
                    Plan
                  </th>

                  <th className="text-left p-3 text-black">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="p-3 text-black">
                    John Doe
                  </td>

                  <td className="p-3 text-black">
                    john@example.com
                  </td>

                  <td className="p-3 text-black">
                    Pro
                  </td>

                  <td className="p-3 text-green-600">
                    Active
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="p-3 text-black">
                    Sarah Smith
                  </td>

                  <td className="p-3 text-black">
                    sarah@example.com
                  </td>

                  <td className="p-3 text-black">
                    Enterprise
                  </td>

                  <td className="p-3 text-green-600">
                    Active
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
}