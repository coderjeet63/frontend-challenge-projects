import React from 'react'
import '../cssChallenge/Netflix.css'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-[var(--padding-mobile)] md:px-[var(--padding-desktop)]  bg-black/70 backdrop-blur-md">
      <h1 className="text-3xl font-extrabold text-red-600">Netflix</h1>

      <div className="flex items-center gap-4">
        <select className="bg-transparent border border-gray-400 text-white px-2 py-1 rounded">
          <option className="text-black">English</option>
          <option className="text-black">Hindi</option>
          <option className="text-black">Spanish</option>
        </select>

        <button className="bg-red-600 text-white px-5 py-1.5 rounded-md">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar
