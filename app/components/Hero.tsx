
'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Shield, Zap, Eye, Lock, AlertTriangle, Globe } from 'lucide-react'

interface HeroProps {
  onConsultationClick: () => void
}

export default function Hero({ onConsultationClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Matrix rain effect
    const characters = 'ابجدهوزحطيكلمنسعفصقرشتثخذضظغ01010101'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    function draw() {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff9d'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Matrix Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
        style={{ zIndex: -1 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-transparent to-cyber-dark opacity-80" />

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-6xl md:text-8xl font-cyber font-black mb-4 rtl-text"
            animate={{ 
              textShadow: [
                "0 0 20px #00ff9d",
                "0 0 40px #00ff9d, 0 0 60px #00e1ff",
                "0 0 20px #00ff9d"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Project{' '}
            <span className="text-cyber-green glow-text">ZeroDay</span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-cyber-blue font-bold rtl-text"
            variants={itemVariants}
          >
            خبراء الأمن السيبراني واختبار الاختراق
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed rtl-text">
            نحن نحمي عالمك الرقمي من التهديدات السيبرانية المتقدمة
            <br />
            <span className="text-cyber-green">بأحدث التقنيات والخبرات العالمية</span>
          </p>
        </motion.div>

        {/* Security Features Icons */}
        <motion.div 
          variants={itemVariants} 
          className="flex justify-center space-x-8 rtl:space-x-reverse mb-12"
        >
          {[
            { Icon: Shield, label: 'حماية متقدمة' },
            { Icon: Eye, label: 'مراقبة 24/7' },
            { Icon: Zap, label: 'استجابة سريعة' },
            { Icon: Lock, label: 'تشفير عسكري' }
          ].map(({ Icon, label }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-full flex items-center justify-center mb-3 shadow-lg shadow-cyber-green/30">
                <Icon className="w-8 h-8 text-black" />
              </div>
              <span className="text-sm text-gray-400">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={onConsultationClick}
            className="bg-gradient-to-r from-cyber-green to-cyber-blue text-black px-8 py-4 rounded-full text-xl font-bold shadow-lg shadow-cyber-green/30 hover:shadow-cyber-green/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔒 احجز استشارة مجانية الآن
          </motion.button>
          
          <motion.button
            className="border-2 border-cyber-blue text-cyber-blue px-8 py-4 rounded-full text-xl font-bold hover:bg-cyber-blue hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📊 تقرير الأمان المجاني
          </motion.button>
        </motion.div>

        {/* Floating Security Alert */}
        <motion.div
          className="absolute bottom-10 right-10 bg-red-500/20 border border-red-500 rounded-lg p-4 max-w-sm"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
            <div className="rtl-text">
              <p className="text-red-400 font-semibold">تنبيه أمني!</p>
              <p className="text-white text-sm">تم اكتشاف {Math.floor(Math.random() * 50) + 10} محاولة اختراق اليوم</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
