import React, { useState } from 'react'

function SliderImages() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    'bg-gray-300',
    'bg-gray-400',
    'bg-gray-500'
  ]

  const handleClickPrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const handleClickNext = () => {
    setCurrentIndex(prev =>
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="w-[600px] h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Image Slider Layout
        </h2>

        {/* VIEWPORT */}
        <div className="w-[600px] h-[250px] overflow-hidden">

          {/* SLIDER WRAPPER */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 600}px)` }}
          >
            {slides.map((bg, index) => (
              <div
                key={index}
                className={`w-[600px] h-[250px] flex-shrink-0 ${bg} rounded-xl flex items-center justify-center`}
              >
                Image {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 px-4">
          <button onClick={handleClickPrev} className="px-4 py-2 bg-gray-200 rounded">
            Prev
          </button>
          <button onClick={handleClickNext} className="px-4 py-2 bg-gray-200 rounded">
            Next
          </button>
        </div>

      </div>
    </div>
  )
}

export default SliderImages
