import React from 'react'
import Calculator from './components/Calculator.jsx'
import { Route , Routes } from 'react-router-dom'
export default function App() {
  return (
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
  )
}
