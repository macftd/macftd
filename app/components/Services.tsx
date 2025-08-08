
'use client'

import { motion } from 'framer-motion'
import { Search, Shield, Users, Eye, AlertTriangle, Lock } from 'lucide-react'

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
      description: 'مراقبة مستمرة لأنظمتك مع فريق خبراء للاستجابة السريعة',
      features: ['مراقبة فورية', 'تنبيهات ذكية', 'تحليل التهديدات'],
      color: 'from-purple-500 to-pink-400',
      glow: 'shadow-purple-500/30'
    },
    {
      icon: Lock,
      title: 'تقييم الأمان',
      title_en: 'Security Assessment',
      description: 'تقييم شامل لحالة الأمان الحالية وتقديم توصيات للتحسين',
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
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-gray-900 to-cyber-dark"></div>
      
      <div className="container mx-auto px-4 relative">
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
              className="bg-cyber-gray/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyber-green/50 transition-all duration-500 group"
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 rtl-text">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{service.title_en}</p>
              
              <p className="text-gray-300 mb-6 rtl-text leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 rounded-full bg-cyber-green"></div>
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
          <p className="text-gray-400 mb-8 rtl-text">معتمدون من أفضل المؤسسات العالمية</p>
          <div className="flex justify-center items-center space-x-12 rtl:space-x-reverse opacity-60">
            <div className="text-2xl font-bold text-cyber-green">ISO 27001</div>
            <div className="text-2xl font-bold text-cyber-blue">CEH</div>
            <div className="text-2xl font-bold text-yellow-400">CISSP</div>
            <div className="text-2xl font-bold text-purple-400">OSCP</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
