
'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Award, Users } from 'lucide-react'

export default function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: 'الأمان أولاً',
      title_en: 'Security First',
      description: 'نضع الأمان في المقدمة ونستخدم أحدث التقنيات للحماية'
    },
    {
      icon: Target,
      title: 'دقة في التنفيذ',
      title_en: 'Precision',
      description: 'نعمل بدقة عالية لضمان حماية شاملة لأنظمتكم'
    },
    {
      icon: Award,
      title: 'خبرة مُعتمدة',
      title_en: 'Certified Expertise',
      description: 'فريق من الخبراء المعتمدين في الأمن السيبراني'
    },
    {
      icon: Users,
      title: 'شراكة طويلة',
      title_en: 'Long-term Partnership',
      description: 'نبني علاقات طويلة المدى مع عملائنا'
    }
  ]

  return (
    <section id="about" className="py-20 bg-cyber-gray">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 rtl-text">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto rtl-text leading-relaxed">
            نحن فريق من خبراء الأمن السيبراني المتخصصين في حماية الشركات من التهديدات الرقمية. 
            مع سنوات من الخبرة وأحدث التقنيات، نضمن لك الحماية الكاملة.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-cyber-dark p-6 rounded-xl border border-gray-700 hover:border-cyber-green/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-cyber-green" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 rtl-text">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{value.title_en}</p>
              
              <p className="text-gray-300 rtl-text leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-cyber-dark rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyber-green mb-2">5+</div>
              <div className="text-gray-300 rtl-text">سنوات خبرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-green mb-2">500+</div>
              <div className="text-gray-300 rtl-text">مشروع منجز</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-green mb-2">50+</div>
              <div className="text-gray-300 rtl-text">عميل راضي</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-green mb-2">24/7</div>
              <div className="text-gray-300 rtl-text">دعم مستمر</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
