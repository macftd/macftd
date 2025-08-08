
'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import ThreatGlobe from './components/ThreatGlobe'
import Testimonials from './components/Testimonials'
import SecurityBlog from './components/SecurityBlog'
import Header from './components/Header'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'

export default function Home() {
  const [showConsultation, setShowConsultation] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen matrix-bg">
      {/* Cyber Cursor Effect */}
      <div 
        className="fixed w-6 h-6 border-2 border-cyber-green rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease'
        }}
      />

      <Header onConsultationClick={() => setShowConsultation(true)} />
      
      <main>
        <Hero onConsultationClick={() => setShowConsultation(true)} />
        <AboutUs />
        <Services />
        <ThreatGlobe />
        <Testimonials />
        <SecurityBlog />
      </main>

      <Footer />
      
      {showConsultation && (
        <ConsultationModal onClose={() => setShowConsultation(false)} />
      )}
    </div>
  )
}
