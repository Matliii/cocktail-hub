import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchForm />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
    
      </Routes>
    </Router>
  )
}

export default App
