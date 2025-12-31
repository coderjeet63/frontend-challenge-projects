import React, { useState, useEffect } from 'react'

function StopWatch() {

  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hr, setHr] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let intervalId

    if (running) {
      intervalId = setInterval(() => {
        setSec(prev => prev + 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [running])

  // ✅ second → minute
  useEffect(() => {
    if (sec === 60) {
      setSec(0)
      setMin(prev => prev + 1)
    }
  }, [sec])

  // ✅ minute → hour
  useEffect(() => {
    if (min === 60) {
      setMin(0)
      setHr(prev => prev + 1)
    }
  }, [min])

  return (
    <div className='min-h-screen bg-amber-500 flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold mb-10'>Stop Watch</h1>

      <h2 className='text-4xl font-mono mb-10'>
        {hr.toString().padStart(2, '0')} :
        {min.toString().padStart(2, '0')} :
        {sec.toString().padStart(2, '0')}
      </h2>

      <div className='flex space-x-4'>
        <button
          onClick={() => setRunning(true)}
          className='bg-blue-500 w-20 rounded p-2 font-bold'
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className='bg-red-500 w-20 rounded p-2 font-bold'
        >
          Stop
        </button>

        <button
          onClick={() => {
            setRunning(false)
            setSec(0)
            setMin(0)
            setHr(0)
          }}
          className='bg-green-500 w-20 rounded p-2 font-bold'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default StopWatch
