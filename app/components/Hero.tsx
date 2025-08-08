
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
'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowRight, Play, Zap, Lock, Eye } from 'lucide-react'

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
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-cyber-green/30 pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 20}%`
          }}
        >
          <item.icon className="w-12 h-12" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-6 px-4 py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-5 h-5 text-cyber-green" />
              <span className="text-cyber-green font-semibold rtl-text">خبراء الأمن السيبراني</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-cyber font-bold mb-6">
              <span className="text-white rtl-text">Project</span>
              <br />
              <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
                ZeroDay
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed rtl-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            نحن فريق من خبراء الأمن السيبراني المتخصصين في اختبار الاختراق وحماية الأنظمة الرقمية.
            <br />
            <span className="text-cyber-green">احمِ أعمالك قبل أن يستهدفها المخترقون.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={onConsultationClick}
              className="px-8 py-4 bg-gradient-to-r from-cyber-green to-cyber-blue text-black font-bold rounded-full hover:shadow-lg hover:shadow-cyber-green/50 transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="rtl-text">احجز استشارة مجانية</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-cyber-green text-cyber-green font-bold rounded-full hover:bg-cyber-green hover:text-black transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span className="rtl-text">شاهد أعمالنا</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-cyber-green mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm rtl-text">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.label_en}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyber-green rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyber-green rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
