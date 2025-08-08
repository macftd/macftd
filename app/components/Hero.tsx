
'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Shield, Zap, Eye, Lock, AlertTriangle, Globe, ArrowRight, Play, Star, Award } from 'lucide-react'

interface HeroProps {
  onConsultationClick: () => void
}

export default function Hero({ onConsultationClick }: HeroProps) {
  const stats = [
    { number: '500+', label: 'مشروع مكتمل', label_en: 'Completed Projects' },
    { number: '99.9%', label: 'معدل الحماية', label_en: 'Protection Rate' },
    { number: '24/7', label: 'دعم مستمر', label_en: 'Continuous Support' },
    { number: '100+', label: 'عميل راضي', label_en: 'Satisfied Clients' }
  ]

  const floatingIcons = [
    { icon: Shield, delay: 0 },
    { icon: Lock, delay: 0.5 },
    { icon: Eye, delay: 1 },
    { icon: Zap, delay: 1.5 },
    { icon: Award, delay: 2 },
    { icon: Star, delay: 2.5 }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="matrix-rain"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>
      </div>

      {/* Floating Premium Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute w-12 h-12 text-blue-400/30"
          style={{
            top: `${15 + index * 12}%`,
            left: `${5 + index * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: item.delay
          }}
        >
          <item.icon className="w-full h-full" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Premium Brand Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-left rtl:text-right">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                MACFTD
              </h1>
              <p className="text-gray-300 text-sm">Cybersecurity Excellence</p>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 rtl-text leading-tight">
            الحماية السيبرانية
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-pulse">
              المتقدمة
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 rtl-text font-light">
            نقود مستقبل الأمن الرقمي بحلول مبتكرة وخبرة عالمية
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-blue-300">
            <span className="bg-blue-900/30 px-4 py-2 rounded-full border border-blue-500/30">ISO 27001</span>
            <span className="bg-blue-900/30 px-4 py-2 rounded-full border border-blue-500/30">NIST Framework</span>
            <span className="bg-blue-900/30 px-4 py-2 rounded-full border border-blue-500/30">GDPR Compliant</span>
          </div>
        </motion.div>

        {/* Premium Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-white font-medium rtl-text mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.label_en}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Premium CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={onConsultationClick}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center space-x-3 rtl:space-x-reverse">
              <Shield className="w-6 h-6" />
              <span className="rtl-text">استشارة مجانية متخصصة</span>
            </span>
          </motion.button>

          <motion.button
            className="group border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-400/10 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-3 rtl:space-x-reverse">
              <Eye className="w-6 h-6" />
              <span className="rtl-text">تقييم أمني شامل</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Live Security Alert */}
        <motion.div
          className="absolute bottom-10 right-10 bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-sm border border-red-400/50 rounded-2xl p-6 max-w-sm shadow-2xl"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <AlertTriangle className="w-8 h-8 text-red-300 animate-pulse" />
            <div className="rtl-text">
              <p className="text-red-200 font-bold text-lg">تنبيه أمني مباشر</p>
              <p className="text-white">تم رصد {Math.floor(Math.random() * 100) + 50} محاولة اختراق اليوم</p>
              <p className="text-red-200 text-sm mt-1">MACFTD يحميكم 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
