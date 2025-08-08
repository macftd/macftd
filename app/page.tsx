
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Premium Cyber Cursor Effect */}
      <div 
        className="fixed w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference opacity-70"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transition: 'all 0.1s ease',
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)'
        }}
      />

      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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
        <ConsultationModal 
          open={showConsultation}
          onClose={() => setShowConsultation(false)} 
        />
      )}

      {/* Global Loading Indicator */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          🔒 MACFTD Protection Active
        </div>
      </motion.div>
    </div>
  )
}
