
'use client'

import { motion } from 'framer-motion'
import { Shield, Search, Zap, Users, Globe, Lock, Eye, AlertTriangle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'اختبار الاختراق',
      title_en: 'Penetration Testing',
      description: 'فحص شامل لأنظمتك لاكتشاف الثغرات الأمنية قبل أن يستغلها المخترقون',
      features: ['اختبار الشبكات', 'فحص التطبيقات', 'اختبار الأجهزة المحمولة'],
      color: 'from-red-500 to-orange-500',
      glow: 'shadow-red-500/30'
    },
    {
      icon: Shield,
      title: 'حماية المواقع الإلكترونية',
      title_en: 'Web Security',
      description: 'حماية مواقعك من هجمات DDoS والبرمجيات الخبيثة والاختراقات',
      features: ['حماية من DDoS', 'جدار الحماية', 'مراقبة مستمرة'],
      color: 'from-cyber-green to-green-400',
      glow: 'shadow-cyber-green/30'
    },
    {
      icon: Users,
      title: 'تدريب الأمن السيبراني',
      title_en: 'Cybersecurity Training',
      description: 'برامج تدريبية متخصصة لفرق العمل لزيادة الوعي الأمني',
      features: ['ورش عمل تفاعلية', 'شهادات معتمدة', 'محاكاة الهجمات'],
      color: 'from-cyber-blue to-blue-400',
      glow: 'shadow-cyber-blue/30'
    },
    {
      icon: Eye,
      title: 'مراقبة الأمان 24/7',
      title_en: '24/7 Security Monitoring',
      description: 'مراقبة مستمرة لأنظمتك مع فريق من الخبراء على مدار الساعة',
      features: ['مراقبة في الوقت الفعلي', 'تنبيهات فورية', 'استجابة سريعة'],
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/30'
    },
    {
      icon: Lock,
      title: 'استشارات الأمان',
      title_en: 'Security Consulting',
      description: 'خدمات استشارية متخصصة لتطوير استراتيجية الأمان الخاصة بشركتك',
      features: ['تقييم المخاطر', 'خطط الأمان', 'سياسات الحماية'],
      color: 'from-yellow-500 to-orange-400',
      glow: 'shadow-yellow-500/30'
    },
    {
      icon: AlertTriangle,
      title: 'الاستجابة للحوادث',
      title_en: 'Incident Response',
      description: 'فريق متخصص للاستجابة السريعة للحوادث الأمنية والهجمات',
      features: ['استجابة فورية', 'تحليل الهجمات', 'استعادة الأنظمة'],
      color: 'from-red-600 to-red-400',
      glow: 'shadow-red-600/30'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-cyber font-bold mb-6 rtl-text">
            خدماتنا <span className="text-cyber-green">المتخصصة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto rtl-text">
            نقدم مجموعة شاملة من خدمات الأمن السيبراني المتقدمة لحماية أعمالك الرقمية
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyber-green/50 transition-all duration-300 group"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 ${service.glow} hover:shadow-lg transition-all duration-300 group-hover:animate-pulse`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 rtl-text text-white group-hover:text-cyber-green transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 rtl-text leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className="mt-6 w-full bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 border border-cyber-green text-cyber-green px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-cyber-green hover:to-cyber-blue hover:text-black transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                طلب الخدمة
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">معتمدون من أكبر المؤسسات العالمية</p>
          <div className="flex justify-center items-center space-x-12 rtl:space-x-reverse opacity-60">
            {['ISO 27001', 'CEH', 'CISSP', 'OSCP', 'CISM'].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.1, borderColor: '#00ff9d' }}
              >
                <span className="text-cyber-green font-cyber font-semibold">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
