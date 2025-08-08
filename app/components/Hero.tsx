'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Shield, Zap, Eye, Lock, AlertTriangle, Globe, ArrowRight, Play } from 'lucide-react'

interface HeroProps {
  onConsultationClick: () => void
}

export default function Hero({ onConsultationClick }: HeroProps) {
  const stats = [
    { number: '500+', label: 'اختبار اختراق ناجح', label_en: 'Successful Penetration Tests' },
    { number: '99.9%', label: 'معدل الحماية', label_en: 'Protection Rate' },
    { number: '24/7', label: 'مراقبة مستمرة', label_en: 'Continuous Monitoring' },
    { number: '100+', label: 'عميل راضي', label_en: 'Satisfied Clients' }
  ]

  const floatingIcons = [
    { icon: Shield, delay: 0 },
    { icon: Lock, delay: 0.5 },
    { icon: Eye, delay: 1 },
    { icon: Zap, delay: 1.5 }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          {/* Matrix-like background pattern */}
          <div className="matrix-rain"></div>
        </div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute w-12 h-12 text-cyber-green/30"
          style={{
            top: `${20 + index * 20}%`,
            left: `${10 + index * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: item.delay
          }}
        >
          <item.icon className="w-full h-full" />
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Headline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 rtl-text leading-tight">
            حماية{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue animate-glow">
              سيبرانية
            </span>
            {' '}متقدمة
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 rtl-text">
            نحمي أعمالك من التهديدات السيبرانية بأحدث التقنيات
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyber-green mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 rtl-text">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={onConsultationClick}
            className="bg-gradient-to-r from-cyber-green to-cyber-blue text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyber-green/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔒 احجز استشارة مجانية
          </motion.button>

          <motion.button
            className="border border-cyber-green text-cyber-green px-8 py-4 rounded-full font-bold text-lg hover:bg-cyber-green/10 transition-all duration-300"
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