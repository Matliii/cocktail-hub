import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" />
        <Route path="/about" element={<About/>}/>
    
      </Routes>
    </Router>
  )
}

export default App
