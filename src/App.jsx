import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import SplashScreen from './components/SplashScreen'
import Logo3DSidebar from './components/Logo3DSidebar'
import Product from './components/Product'
import FAQ from './components/FAQ'


function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
    if (page !== 'gallery') {
      // Scroll to section for other pages
      setTimeout(() => {
        const element = document.getElementById(page)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Logo3DSidebar />
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      {currentPage === 'gallery' ? (
        <Gallery />
      ) : (
        <>
          <Hero />
          <Services />
          <About />
          <Product/>
          <FAQ/>
          <Contact />
        </>
      )}
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App

