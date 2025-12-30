import React from 'react'

function Portfolio() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center bg-cyan-300 px-6 py-4">
        <h1 className="text-xl font-bold">Portfolio</h1>

        <ul className="flex gap-6 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

     <main className="min-h-screen flex items-center">
  <div className="ml-24 max-w-xl space-y-4">
    <p className="text-lg font-medium">
      Hello, I'm
    </p>

    <h1 className="text-5xl font-extrabold">
      Emrit Diyal
    </h1>

    <p className="text-gray-400">
      A Software Engineer with 3 years of Experience.
    </p>

    <div className="flex gap-4 pt-4">
      <button className="bg-teal-500 text-white px-6 py-3 rounded-md font-medium">
        Hire Me
      </button>

      <button className="border border-teal-500 text-teal-500 px-6 py-3 rounded-md font-medium">
        Get Resume
      </button>
    </div>
  </div>
</main>

    </div>
  )
}

export default Portfolio
