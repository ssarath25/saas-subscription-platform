import Sidebar from "../../components/Sidebar";

export default function SettingsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">

        <div className="bg-cyan-700 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold">
            Settings
          </h1>
        </div>

        <div className="p-8">

          <div className="bg-white rounded-xl shadow-lg border p-8">

            <h2 className="text-2xl font-bold text-black mb-6">
              Account Settings
            </h2>

            <div className="space-y-6">

              <div>
                <label className="block text-black font-bold mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  defaultValue="SaaS Subscription Platform"
                  className="w-full border rounded-lg p-3 text-black"
                />
              </div>

              <div>
                <label className="block text-black font-bold mb-2">
                  Admin Email
                </label>

                <input
                  type="email"
                  defaultValue="admin@example.com"
                  className="w-full border rounded-lg p-3 text-black"
                />
              </div>

              <div>
                <label className="block text-black font-bold mb-2">
                  Notification Preferences
                </label>

                <select className="w-full border rounded-lg p-3 text-black">
                  <option>Email Notifications</option>
                  <option>SMS Notifications</option>
                  <option>Both</option>
                </select>
              </div>

              <button className="bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold">
                Save Settings
              </button>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}