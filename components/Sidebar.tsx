import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white shadow-xl">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-white">
          SaaS Admin
        </h1>

        <p className="text-white mt-2">
          Subscription Platform
        </p>
      </div>

      <nav className="p-4">

        <ul className="space-y-3">

          <li>
            <Link
              href="/dashboard"
              className="block p-3 rounded-lg bg-slate-800 hover:bg-slate-700 font-bold"
            >
              📊 Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/admin"
              className="block p-3 rounded-lg hover:bg-slate-700 font-bold"
            >
              👥 Admin
            </Link>
          </li>

          <li>
            <Link
              href="/analytics"
              className="block p-3 rounded-lg hover:bg-slate-700 font-bold"
            >
              📈 Analytics
            </Link>
          </li>

          <li>
            <Link
              href="/plans"
              className="block p-3 rounded-lg hover:bg-slate-700 font-bold"
            >
              💳 Plans
            </Link>
          </li>

          <li>
            <Link
              href="/billing"
              className="block p-3 rounded-lg hover:bg-slate-700 font-bold"
            >
              💰 Billing
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block p-3 rounded-lg hover:bg-slate-700 font-bold"
            >
              ⚙️ Settings
            </Link>
            </li>

        </ul>

      </nav>
    </div>
  );
}