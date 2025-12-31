import React, { useEffect, useState } from 'react'

function Captchgenratore() {

  const [captcha, setCaptcha] = useState("")
  const [input, setInput] = useState("")

  const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  useEffect(() => {
    let uniquechar = ""
    for (let i = 0; i < 6; i++) {
      uniquechar += randomchar.charAt(
        Math.floor(Math.random() * randomchar.length)
      )
    }
    setCaptcha(uniquechar)
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)

    if (value.length === 6) {
      if (value === captcha) {
        alert("Captcha matched ✅")
      } else {
        alert("Captcha not matched ❌")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">

        <h1 className="text-2xl font-bold mb-6 text-center">
          CAPTCHA Verification
        </h1>

        {/* CAPTCHA BOX */}
        <div className="flex items-center justify-between mb-4">
          <div className="px-4 py-3 bg-gray-200 text-xl font-mono tracking-widest rounded select-none">
            {captcha}
          </div>

          <button
            onClick={() => window.location.reload()}
            className="text-sm text-blue-600 hover:underline"
          >
            Refresh
          </button>
        </div>

        {/* INPUT */}
        <input
          type="text"
          value={input}
          onChange={handleChange}
          maxLength={6}
          placeholder="Enter captcha"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <p className="text-xs text-gray-500 mt-3 text-center">
          Enter the characters shown above
        </p>
      </div>
    </div>
  )
}

export default Captchgenratore
