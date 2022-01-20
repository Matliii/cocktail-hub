import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Main from './pages/Main'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/> }/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App
