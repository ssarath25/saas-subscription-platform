export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Register
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded mb-4 text-black"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded mb-4 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded mb-4 text-black"
        />

        <button
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Create Account
        </button>

      </div>
    </main>
  );
}