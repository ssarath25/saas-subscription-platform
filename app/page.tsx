export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            SaaS Subscription Platform
          </h1>

          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">
              Login
            </button>

            <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-black">
          Manage Your SaaS Business Easily
        </h1>

        <p className="text-gray-700 text-xl">
          Subscription Management, Billing & Analytics
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-10">

        {/* Basic */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-black">
            Basic
          </h2>

          <h3 className="text-4xl font-bold my-4 text-black">
            $10
          </h3>

          <p className="text-gray-700 mb-4">
            Perfect for beginners and small projects.
          </p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Subscribe
          </button>
        </div>

        {/* Pro */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-500">
          <div className="bg-green-600 text-white text-center py-1 rounded mb-3 font-bold">
            MOST POPULAR
          </div>

          <h2 className="text-2xl font-bold text-black">
            Pro
          </h2>

          <h3 className="text-4xl font-bold my-4 text-black">
            $25
          </h3>

          <p className="text-gray-700 mb-4">
            Advanced features for growing businesses.
          </p>

          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Subscribe
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-black">
            Enterprise
          </h2>

          <h3 className="text-4xl font-bold my-4 text-black">
            $99
          </h3>

          <p className="text-gray-700 mb-4">
            Complete solution for large organizations.
          </p>

          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Subscribe
          </button>
        </div>

      </section>
    </main>
  );
}