import React, { useState } from 'react'

function Calculator() {

  const [input, setInput] = useState("")

  const buttons = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ]

  const operators = ["+", "-", "*", "/", "%"]

  const handleClick = (e) => {
    const value = e.target.innerText
    const lastChar = input.slice(-1)

    // AC
    if (value === "AC") {
      setInput("")
      return
    }

    // =
    if (value === "=") {
      try {
        setInput(eval(input).toString())
      } catch {
        setInput("Error")
      }
      return
    }

   
    if (operators.includes(value) && operators.includes(lastChar)) {
      return
    }

    setInput(prev => prev + value)
  }

  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center p-4 gap-4'>

      <input
        type="text"
        value={input}
        readOnly
        className='w-[500px] border border-gray-600 rounded-lg p-2 bg-gray-900 text-white text-right text-xl'
      />

      <div className='w-[500px] h-[500px] grid grid-cols-4 gap-4'>
        {
          buttons.map((btn, ind) => {
            return (
              <button
                key={ind}
                onClick={handleClick}
                className='bg-gray-800 text-white text-xl rounded-lg hover:bg-gray-700 transition-colors duration-200'
              >
                {btn}
              </button>
            )
          })
        }
      </div>

    </div>
  )
}

export default Calculator
