export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white shadow-xl">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-white">
          SaaS Admin
        </h1>

        <p className="text-slate-300 text-sm mt-1">
          Subscription Platform
        </p>
      </div>

      {/* Menu */}
      <nav className="p-4">

        <ul className="space-y-3">

          <li className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition">
            <span className="text-white font-medium">
              📊 Dashboard
            </span>
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition">
            <span className="text-white font-medium">
              👥 Users
            </span>
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition">
            <span className="text-white font-medium">
              💳 Plans
            </span>
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition">
            <span className="text-white font-medium">
              💰 Billing
            </span>
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition">
            <span className="text-white font-medium">
              📈 Analytics
            </span>
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition">
            <span className="text-white font-medium">
              ⚙️ Settings
            </span>
          </li>

        </ul>

      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-64 p-4 border-t border-slate-700">
        <p className="text-slate-300 text-sm">
          Version 1.0
        </p>
      </div>

    </div>
  );
}