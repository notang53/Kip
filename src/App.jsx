
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Loader from './components/layout/Loader'

import Home from './pages/home'
import About from './pages/About'
import Feature from './pages/Feature'
import HowItWork from './pages/HowItWork'
import Contact from './pages/contact'
import StudentLogin from './pages/Login'
import StudentDashboardPage from './pages/dashboard/StudentDashboard'
import Classes from './pages/dashboard/Classes'
import SubjectClass from './pages/dashboard/SubjectClass'
import Assignments from './pages/dashboard/Assignments'
import Progress from './pages/dashboard/Progress'
import { AuthModalProvider } from './components/auth/AuthModalContext'

const AppContent = () => {
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()
  const isDashboard = pathname.startsWith('/StudentDashboard') || pathname.startsWith('/Classes') || pathname.startsWith('/Assignments') || pathname.startsWith('/Progress')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <>
          {!isDashboard && <Header />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/HowItWork" element={<HowItWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<StudentLogin />} />
            <Route path="/StudentDashboard" element={<StudentDashboardPage />} />
            <Route path="/Classes" element={<Classes />} />
            <Route path="/Classes/:classId" element={<SubjectClass />} />
            <Route path="/Assignments" element={<Assignments />} />
            <Route path="/Progress" element={<Progress />} />
          </Routes>

          {!isDashboard && <Footer />}
        </>
      )}
    </>
  )
}

const App = () => (
  <BrowserRouter>
    <AuthModalProvider>
      <AppContent />
    </AuthModalProvider>
  </BrowserRouter>
)

export default App
