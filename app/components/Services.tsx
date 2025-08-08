
'use client'

import { motion } from 'framer-motion'
import { Shield, Search, Users, Eye, Network, Brain, Lock, Zap, Globe, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'اختبار الاختراق المتقدم',
      title_en: 'Advanced Penetration Testing',
      description: 'فحص شامل متعدد الطبقات لاكتشاف الثغرات الأمنية قبل استغلالها',
      features: ['Red Team Operations', 'Network Penetration', 'Web Application Testing', 'Mobile App Security'],
      color: 'from-red-500 to-rose-600',
      glow: 'shadow-red-500/30',
      premium: true
    },
    {
      icon: Shield,
      title: 'حلول الحماية المؤسسية',
      title_en: 'Enterprise Security Solutions',
      description: 'أنظمة حماية شاملة مصممة خصيصاً لمتطلبات المؤسسات الكبرى',
      features: ['SIEM Implementation', 'SOC Design', 'Incident Response', 'Threat Intelligence'],
      color: 'from-blue-500 to-cyan-600',
      glow: 'shadow-blue-500/30',
      premium: true
    },
    {
      icon: Brain,
      title: 'الذكاء الاصطناعي للأمن',
      title_en: 'AI-Powered Security',
      description: 'تقنيات الذكاء الاصطناعي المتطورة لاكتشاف التهديدات التنبؤية',
      features: ['ML Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Predictive Security'],
      color: 'from-purple-500 to-indigo-600',
      glow: 'shadow-purple-500/30',
      premium: true
    },
    {
      icon: Users,
      title: 'التدريب التنفيذي المتخصص',
      title_en: 'Executive Security Training',
      description: 'برامج تدريبية عالمية المستوى للقيادات والفرق التقنية',
      features: ['C-Level Briefings', 'Technical Workshops', 'Certification Programs', 'Simulation Exercises'],
      color: 'from-green-500 to-emerald-600',
      glow: 'shadow-green-500/30',
      premium: false
    },
    {
      icon: Network,
      title: 'أمان البنية التحتية',
      title_en: 'Infrastructure Security',
      description: 'حماية شاملة للشبكات والخوادم والأنظمة الحيوية',
      features: ['Network Segmentation', 'Zero Trust Architecture', 'Cloud Security', 'IoT Protection'],
      color: 'from-orange-500 to-amber-600',
      glow: 'shadow-orange-500/30',
      premium: false
    },
    {
      icon: Globe,
      title: 'الامتثال التنظيمي',
      title_en: 'Regulatory Compliance',
      description: 'ضمان الامتثال الكامل للمعايير الدولية والمحلية',
      features: ['ISO 27001', 'GDPR Compliance', 'SAMA Guidelines', 'Audit Support'],
      color: 'from-teal-500 to-cyan-600',
      glow: 'shadow-teal-500/30',
      premium: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Premium Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <Award className="w-8 h-8 mx-4 text-blue-400" />
            <div className="w-20 h-1 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 rtl-text">
            خدماتنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">المتميزة</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto rtl-text leading-relaxed">
            مجموعة شاملة من الحلول الأمنية المتطورة المصممة لحماية أصولكم الرقمية وضمان استمرارية أعمالكم
          </p>
        </motion.div>

        {/* Services Grid */}
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
              className="group relative"
            >
              {/* Premium Badge */}
              {service.premium && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Premium
                  </div>
                </div>
              )}
              
              <div className={`
                relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl 
                rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 
                transition-all duration-500 group-hover:scale-105 group-hover:${service.glow}
                overflow-hidden
              `}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2 rtl-text group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.title_en}</p>
                  
                  <p className="text-gray-300 mb-6 rtl-text leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button 
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse hover:shadow-lg transition-all duration-300`}
                    whileHover={{ y: -2 }}
                  >
                    <span className="rtl-text">اطلب الخدمة</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30">
            <h3 className="text-4xl font-bold text-white mb-6 rtl-text">
              هل تحتاج حلاً مخصصاً؟
            </h3>
            <p className="text-xl text-gray-300 mb-8 rtl-text">
              فريقنا جاهز لتصميم حلول أمنية فريدة تناسب احتياجاتكم الخاصة
            </p>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              تواصل معنا الآن
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
