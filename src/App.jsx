import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './pages/home'
import About from './pages/About'
import Feature from './pages/Feature'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App