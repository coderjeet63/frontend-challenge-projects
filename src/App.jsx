import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Calculator from './components/Calculator.jsx'
import SlidingLoginPage from './components/SlidingLoginPage.jsx'

export default function App() {
  return (
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/sliding-login" element={<SlidingLoginPage />} />
      </Routes>
  )
}
