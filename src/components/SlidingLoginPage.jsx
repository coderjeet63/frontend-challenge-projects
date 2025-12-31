import React, { useState } from "react";

function SlidingLoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Card */}
      <div className="w-[800px] h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden relative">

        {/* Top Buttons */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-6 z-10">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 rounded-full transition ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 rounded-full transition ${
              !isLogin ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Register
          </button>
        </div>

        {/* SLIDER WRAPPER */}
        <div
          className={`w-[1600px] h-full flex transition-transform duration-500 ease-in-out ${
            isLogin ? "translate-x-0" : "-translate-x-[800px]"
          }`}
        >
          {/* LOGIN PAGE */}
          <div className="w-[800px] p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Login</h2>

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded mb-6"
            />

            <button className="bg-blue-600 text-white p-3 rounded">
              Login
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Don’t have an account? Register
            </p>
          </div>

          {/* REGISTER PAGE */}
          <div className="w-[800px] p-10 flex flex-col justify-center bg-gray-50">
            <h2 className="text-3xl font-bold mb-6">Register</h2>

            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded mb-6"
            />

            <button className="bg-green-600 text-white p-3 rounded">
              Register
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidingLoginPage;
