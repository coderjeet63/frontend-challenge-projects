import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Calculator from './components/Calculator.jsx'
import SlidingLoginPage from './components/SlidingLoginPage.jsx'
import StopWatch from './components/StopWatch.jsx'
import Captchgenratore from './components/Captchgenratore.jsx'
import SliderImages from './components/SliderImages.jsx'
import QuizApplication from './components/QuizApplication.jsx'
import NetflixClone from './cssChallenge/NetflixClone.jsx'


export default function App()
 {
  return (
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/sliding-login" element={<SlidingLoginPage />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/captchgenratore" element={<Captchgenratore />} />
        <Route path="/slider-images" element={<SliderImages />} />
        <Route path="/quiz" element={<QuizApplication />} />
        <Route path="/netflix-clone" element={<NetflixClone />} />

      </Routes>
  )
}
