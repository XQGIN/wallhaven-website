import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LiquidGlassBackground from './components/LiquidGlass/LiquidGlassBackground'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import Features from './sections/Features/Features'
import Download from './sections/Download/Download'
import Screenshots from './sections/Screenshots/Screenshots'
import FAQ from './sections/FAQ/FAQ'
import Footer from './sections/Footer/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <LiquidGlassBackground />
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Screenshots />
          <Download />
          <FAQ />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
