
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Menu, X, Globe, Lock, AlertTriangle } from 'lucide-react'

interface HeaderProps {
  onConsultationClick: () => void
}

export default function Header({ onConsultationClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'الرئيسية', name_en: 'Home', href: '#home' },
    { name: 'خدماتنا', name_en: 'Services', href: '#services' },
    { name: 'من نحن', name_en: 'About', href: '#about' },
    { name: 'المدونة', name_en: 'Blog', href: '#blog' },
    { name: 'اتصل بنا', name_en: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-green/30' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 rtl:space-x-reverse"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Shield className="w-10 h-10 text-cyber-green" />
              <motion.div
                className="absolute inset-0 w-10 h-10 border-2 border-cyber-blue rounded-full opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div>
              <h1 className="text-xl font-cyber font-bold text-white">
                Project <span className="text-cyber-green">ZeroDay</span>
              </h1>
              <p className="text-xs text-cyber-blue">خبراء الأمن السيبراني</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white hover:text-cyber-green transition-colors duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
              >
                <span className="rtl-text">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-green transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <motion.button
              onClick={onConsultationClick}
              className="bg-gradient-to-r from-cyber-green to-cyber-blue text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyber-green/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              استشارة مجانية
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 border-t border-cyber-green/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-cyber-green transition-colors duration-300 rtl-text"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onConsultationClick()
                  setIsMobileMenuOpen(false)
                }}
                className="bg-gradient-to-r from-cyber-green to-cyber-blue text-black px-6 py-2 rounded-full font-semibold w-fit"
              >
                استشارة مجانية
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
