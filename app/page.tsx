export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-5">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">
            SaaS Subscription Platform
          </h1>

          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              Login
            </button>

            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              Register
            </button>
          </div>
        </div>
      </nav>

      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-black">
          Manage Your SaaS Business Easily
        </h1>

        <p className="text-gray-600 text-xl">
          Subscription Management, Billing & Analytics
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Basic</h2>
          <h3 className="text-4xl my-4">$10</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Pro</h2>
          <h3 className="text-4xl my-4">$25</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Enterprise</h2>
          <h3 className="text-4xl my-4">$99</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}