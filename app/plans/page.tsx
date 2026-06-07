import Sidebar from "../../components/Sidebar";

export default function PlansPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">

        {/* Header */}
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

            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg border p-6">
              <h3 className="text-2xl font-bold text-black mb-4">
                Basic
              </h3>

              <p className="text-4xl font-bold text-blue-600 mb-6">
                $9/mo
              </p>

              <ul className="space-y-3 mb-6">
                <li className="text-black">✓ 5 Projects</li>
                <li className="text-black">✓ Basic Analytics</li>
                <li className="text-black">✓ Email Support</li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
                Subscribe
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-lg border p-6">

              <div className="bg-green-600 text-white text-center py-1 rounded mb-4 font-bold">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold text-black mb-4">
                Pro
              </h3>

              <p className="text-4xl font-bold text-green-600 mb-6">
                $29/mo
              </p>

              <ul className="space-y-3 mb-6">
                <li className="text-black">✓ Unlimited Projects</li>
                <li className="text-black">✓ Advanced Analytics</li>
                <li className="text-black">✓ Priority Support</li>
                <li className="text-black">✓ Team Access</li>
              </ul>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">
                Subscribe
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg border p-6">
              <h3 className="text-2xl font-bold text-black mb-4">
                Enterprise
              </h3>

              <p className="text-4xl font-bold text-purple-600 mb-6">
                $99/mo
              </p>

              <ul className="space-y-3 mb-6">
                <li className="text-black">✓ Unlimited Everything</li>
                <li className="text-black">✓ Dedicated Manager</li>
                <li className="text-black">✓ 24/7 Support</li>
                <li className="text-black">✓ Custom Integrations</li>
              </ul>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">
                Subscribe
              </button>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}