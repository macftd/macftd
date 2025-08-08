
'use client'

import { motion } from 'framer-motion'
import { Globe, AlertTriangle, Shield, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ThreatGlobe() {
  const [threats, setThreats] = useState([
    { id: 1, country: 'الولايات المتحدة', attacks: 1247, active: true },
    { id: 2, country: 'الصين', attacks: 892, active: false },
    { id: 3, country: 'روسيا', attacks: 634, active: true },
    { id: 4, country: 'البرازيل', attacks: 421, active: false },
    { id: 5, country: 'الهند', attacks: 318, active: true }
  ])

  const [totalThreats, setTotalThreats] = useState(3512)

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalThreats(prev => prev + Math.floor(Math.random() * 3) + 1)
      
      setThreats(prev => prev.map(threat => ({
        ...threat,
        attacks: threat.attacks + Math.floor(Math.random() * 5),
        active: Math.random() > 0.3
      })))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const threatTypes = [
    { name: 'هجمات DDoS', count: 234, color: 'text-red-400' },
    { name: 'محاولات اختراق', count: 156, color: 'text-orange-400' },
    { name: 'برمجيات خبيثة', count: 89, color: 'text-yellow-400' },
    { name: 'تصيد احتيالي', count: 67, color: 'text-purple-400' }
  ]

  return (
    <section className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/20 via-transparent to-cyber-blue/20 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 rtl-text">
            خريطة التهديدات المباشرة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto rtl-text">
            مراقبة مباشرة للتهديدات السيبرانية حول العالم
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Globe Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Globe */}
            <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-cyber-blue/20 to-cyber-green/20 rounded-full border-2 border-cyber-green/30 flex items-center justify-center">
              <Globe className="w-40 h-40 text-cyber-green animate-pulse" />
              
              {/* Floating Threat Indicators */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-red-500 rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
              
              {/* Pulse Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyber-green/20 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border border-cyber-blue/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Live Counter */}
            <motion.div
              className="text-center mt-8"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-4xl font-bold text-red-400 mb-2">
                {totalThreats.toLocaleString()}
              </div>
              <div className="text-gray-400 rtl-text">التهديدات المكتشفة اليوم</div>
            </motion.div>
          </motion.div>

          {/* Threat Details */}
          <div className="space-y-8">
            {/* Active Threats */}
            <motion.div
              className="bg-cyber-gray rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 rtl-text flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-400 ml-2" />
                التهديدات النشطة
              </h3>
              
              <div className="space-y-3">
                {threatTypes.map((threat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300 rtl-text">{threat.name}</span>
                    <span className={`font-bold ${threat.color}`}>+{threat.count}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Countries */}
            <motion.div
              className="bg-cyber-gray rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 rtl-text flex items-center">
                <Globe className="w-6 h-6 text-cyber-blue ml-2" />
                الهجمات حسب الدولة
              </h3>
              
              <div className="space-y-3">
                {threats.map((threat, index) => (
                  <motion.div 
                    key={threat.id} 
                    className="flex items-center justify-between"
                    animate={{ opacity: threat.active ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className={`w-3 h-3 rounded-full ${threat.active ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                      <span className="text-gray-300 rtl-text">{threat.country}</span>
                    </div>
                    <span className="font-bold text-cyber-green">{threat.attacks.toLocaleString()}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Protection Status */}
            <motion.div
              className="bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-xl p-6 border border-cyber-green/30"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white rtl-text flex items-center">
                    <Shield className="w-6 h-6 text-cyber-green ml-2" />
                    حالة الحماية
                  </h3>
                  <p className="text-gray-300 rtl-text mt-1">جميع الأنظمة محمية</p>
                </div>
                <div className="text-3xl font-bold text-cyber-green">99.9%</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
