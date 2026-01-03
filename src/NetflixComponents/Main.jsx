import React from "react";

function Main() {
  return (
    <div className="text-center text-white px-4">
      
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Welcome to Netflix Clone
      </h1>

      <p className="text-base md:text-lg max-w-md mx-auto mb-6 text-gray-200">
        Experience the best movies and TV shows, just like Netflix!
      </p>

      {/* Email CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
        
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-80 px-4 py-3 rounded-md text-black outline-none focus:ring-2 focus:ring-red-600 border-amber-200 border-4"
        />

        <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3 rounded-md whitespace-nowrap">
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Main;
