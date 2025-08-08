
'use client'

import { motion } from 'framer-motion'
import { Globe, AlertTriangle, Shield, Zap, TrendingUp, Activity, Eye, Lock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ThreatGlobe() {
  const [threats, setThreats] = useState([
    { id: 1, country: 'الولايات المتحدة', attacks: 1247, severity: 'high', active: true, flag: '🇺🇸' },
    { id: 2, country: 'الصين', attacks: 892, severity: 'critical', active: false, flag: '🇨🇳' },
    { id: 3, country: 'روسيا', attacks: 634, severity: 'high', active: true, flag: '🇷🇺' },
    { id: 4, country: 'البرازيل', attacks: 421, severity: 'medium', active: false, flag: '🇧🇷' },
    { id: 5, country: 'الهند', attacks: 318, severity: 'medium', active: true, flag: '🇮🇳' },
    { id: 6, country: 'ألمانيا', attacks: 256, severity: 'low', active: false, flag: '🇩🇪' }
  ])

  const [totalThreats, setTotalThreats] = useState(3512)
  const [blockedToday, setBlockedToday] = useState(847)

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalThreats(prev => prev + Math.floor(Math.random() * 5) + 1)
      setBlockedToday(prev => prev + Math.floor(Math.random() * 3) + 1)
      
      setThreats(prev => prev.map(threat => ({
        ...threat,
        attacks: threat.attacks + Math.floor(Math.random() * 8),
        active: Math.random() > 0.4
      })))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const threatTypes = [
    { name: 'هجمات DDoS', count: 234, color: 'text-red-400', icon: Zap, trend: '+15%' },
    { name: 'محاولات اختراق', count: 156, color: 'text-orange-400', icon: Lock, trend: '+8%' },
    { name: 'برمجيات خبيثة', count: 89, color: 'text-yellow-400', icon: AlertTriangle, trend: '-12%' },
    { name: 'تسرب بيانات', count: 34, color: 'text-purple-400', icon: Eye, trend: '-25%' }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-500/20 border-red-500/50'
      case 'high': return 'text-orange-400 bg-orange-400/20 border-orange-400/50'
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/50'
      case 'low': return 'text-green-400 bg-green-400/20 border-green-400/50'
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/50'
    }
  }

  return (
    <section id="threats" className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-rain"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-blue-400 animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 rtl-text">
            مركز مراقبة التهديدات
          </h2>
          <p className="text-xl text-gray-300 rtl-text">
            مراقبة مستمرة للتهديدات السيبرانية العالمية في الوقت الفعلي
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Live Stats Dashboard */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
                <div className="flex items-center justify-between mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <div className="text-right rtl:text-left">
                    <div className="text-3xl font-bold text-red-400">{totalThreats.toLocaleString()}</div>
                    <div className="text-red-300 text-sm rtl-text">تهديد محتمل</div>
                  </div>
                </div>
                <div className="text-red-300 text-xs rtl-text">آخر 24 ساعة</div>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                  <div className="text-right rtl:text-left">
                    <div className="text-3xl font-bold text-green-400">{blockedToday.toLocaleString()}</div>
                    <div className="text-green-300 text-sm rtl-text">تم حجبه</div>
                  </div>
                </div>
                <div className="text-green-300 text-xs rtl-text">معدل الحماية 99.7%</div>
              </div>
            </div>

            {/* Threat Types */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 rtl-text flex items-center">
                <Activity className="w-6 h-6 ml-3 text-blue-400" />
                أنواع التهديدات
              </h3>
              <div className="space-y-4">
                {threatTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <type.icon className={`w-5 h-5 ${type.color}`} />
                      <span className="text-white rtl-text">{type.name}</span>
                    </div>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <span className={`text-sm px-2 py-1 rounded ${type.trend.startsWith('+') ? 'text-red-400 bg-red-400/10' : 'text-green-400 bg-green-400/10'}`}>
                        {type.trend}
                      </span>
                      <span className={`font-bold ${type.color}`}>{type.count}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Global Threats Map */}
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 rtl-text flex items-center">
              <Globe className="w-6 h-6 ml-3 text-blue-400" />
              خريطة التهديدات العالمية
            </h3>
            
            <div className="space-y-4">
              {threats.map((threat, index) => (
                <motion.div
                  key={threat.id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${getSeverityColor(threat.severity)} ${threat.active ? 'animate-pulse' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">{threat.flag}</span>
                    <div>
                      <div className="text-white font-medium rtl-text">{threat.country}</div>
                      <div className={`text-sm capitalize ${threat.severity === 'critical' ? 'text-red-400' : threat.severity === 'high' ? 'text-orange-400' : threat.severity === 'medium' ? 'text-yellow-400' : 'text-green-400'}`}>
                        {threat.severity} risk
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right rtl:text-left">
                    <div className="text-white font-bold">{threat.attacks.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">محاولات</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Real-time indicator */}
            <div className="mt-6 flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm rtl-text">مراقبة مباشرة - MACFTD Shield Active</span>
            </div>
          </motion.div>
        </div>

        {/* Protection Status */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2 rtl-text">
            حماية MACFTD نشطة
          </h3>
          <p className="text-gray-300 rtl-text">
            أنظمتنا المتطورة تعمل على مدار الساعة لحماية أصولكم الرقمية من جميع أنواع التهديدات
          </p>
        </motion.div>
      </div>
    </section>
  )
}
