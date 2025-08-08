
'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Building } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'أحمد المحمدي',
      position: 'مدير تقنية المعلومات',
      company: 'شركة التقنية المتقدمة',
      content: 'خدمة ممتازة في اختبار الاختراق. اكتشفوا ثغرات لم نكن نعلم بوجودها وساعدونا في إصلاحها بسرعة.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'فاطمة العلي',
      position: 'مديرة الأمن السيبراني',
      company: 'البنك الرقمي',
      content: 'فريق محترف جداً. الحماية التي قدموها لموقعنا منعت العديد من الهجمات. أنصح بهم بشدة.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      id: 3,
      name: 'محمد الزهراني',
      position: 'الرئيس التنفيذي',
      company: 'شركة الحلول الذكية',
      content: 'التدريب الذي قدموه لفريقنا كان رائعاً. زاد من وعينا الأمني بشكل كبير.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 4,
      name: 'سارة القحطاني',
      position: 'مديرة المشاريع',
      company: 'مؤسسة التجارة الإلكترونية',
      content: 'المراقبة المستمرة التي يقدمونها تعطينا راحة البال. نعرف أن أنظمتنا محمية 24/7.',
      rating: 5,
      image: '👩‍💼'
    }
  ]

  return (
    <section className="py-20 bg-cyber-gray">
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
            ما يقوله عملاؤنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto rtl-text">
            شهادات حقيقية من العملاء الذين وثقوا بنا لحماية أعمالهم
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-cyber-dark p-8 rounded-xl border border-gray-700 hover:border-cyber-green/50 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cyber-green/30" />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg mb-6 rtl-text leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-white font-bold rtl-text">{testimonial.name}</h4>
                  <p className="text-cyber-green text-sm rtl-text">{testimonial.position}</p>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mt-1">
                    <Building className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-400 text-sm rtl-text">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-green/5 to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-cyber-green/20 rounded-full flex items-center justify-center">
                <span className="text-cyber-green font-bold">ISO</span>
              </div>
              <span className="text-gray-400">ISO 27001</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                <span className="text-cyber-blue font-bold">CEH</span>
              </div>
              <span className="text-gray-400">Certified Ethical Hacker</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-purple-400 font-bold">CISSP</span>
              </div>
              <span className="text-gray-400">Security Professional</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <span className="text-orange-400 font-bold">CISM</span>
              </div>
              <span className="text-gray-400">Security Manager</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
