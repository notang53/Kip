
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Loader from './components/layout/Loader'

import Home from './pages/home'
import About from './pages/About'
import Feature from './pages/Feature'
import HowItWork from './pages/HowItWork'
import Contact from './pages/contact'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>

      {loading && <Loader />}

      {!loading && (
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/HowItWork" element={<HowItWork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </>
      )}

    </BrowserRouter>
  )
}

export default App
