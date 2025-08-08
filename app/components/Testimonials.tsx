
'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Award, Building, Shield, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'عبدالعزيز المحمد',
      name_en: 'Abdulaziz Al-Mohammad',
      position: 'الرئيس التنفيذي',
      position_en: 'CEO',
      company: 'مجموعة النخيل المالية',
      company_en: 'Al-Nakheel Financial Group',
      avatar: '👨‍💼',
      rating: 5,
      text: 'MACFTD قدمت لنا حلول أمنية متطورة جداً. فريقهم المهني ساعدنا في تطوير استراتيجية أمنية شاملة حمت أصولنا الرقمية بشكل كامل. النتائج فاقت كل التوقعات.',
      results: ['99.9% حماية', 'صفر اختراقات', '40% تحسن الأداء'],
      industry: 'المصارف والتمويل',
      logo: '🏦'
    },
    {
      id: 2,
      name: 'سارة الفيصل',
      name_en: 'Sarah Al-Faisal',
      position: 'مديرة تقنية المعلومات',
      position_en: 'CTO',
      company: 'شركة الرياض للطيران',
      company_en: 'Riyadh Airways',
      avatar: '👩‍💼',
      rating: 5,
      text: 'تجربة استثنائية مع فريق MACFTD. الحلول المبتكرة التي قدموها ساعدتنا في تطوير بنية أمنية قوية تتماشى مع أعلى المعايير الدولية. خدمة عملاء ممتازة ودعم مستمر.',
      results: ['معايير ISO 27001', 'حماية شاملة', 'استجابة سريعة'],
      industry: 'الطيران والنقل',
      logo: '✈️'
    },
    {
      id: 3,
      name: 'خالد العتيبي',
      name_en: 'Khalid Al-Otaibi',
      position: 'رئيس أمن المعلومات',
      position_en: 'CISO',
      company: 'المستشفى السعودي الألماني',
      company_en: 'Saudi German Hospital',
      avatar: '👨‍⚕️',
      rating: 5,
      text: 'في القطاع الصحي، الأمان أولوية قصوى. MACFTD فهمت متطلباتنا الخاصة وصممت حلول مخصصة تحمي بيانات المرضى وتضمن الامتثال للمعايير الصحية الدولية.',
      results: ['HIPAA متوافق', 'حماية البيانات', 'نظام آمن'],
      industry: 'الرعاية الصحية',
      logo: '🏥'
    },
    {
      id: 4,
      name: 'فاطمة الزهراني',
      name_en: 'Fatima Al-Zahrani',
      position: 'مديرة الأمن السيبراني',
      position_en: 'Cybersecurity Director',
      company: 'جامعة الملك سعود',
      company_en: 'King Saud University',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'كمؤسسة تعليمية كبيرة، احتجنا لحماية آلاف الطلاب والموظفين. MACFTD قدمت حلول أمنية ذكية تحمي شبكاتنا وتحافظ على خصوصية البيانات الأكاديمية.',
      results: ['حماية 50,000 مستخدم', 'شبكة آمنة', 'تدريب شامل'],
      industry: 'التعليم',
      logo: '🎓'
    }
  ]

  const stats = [
    { number: '500+', label: 'مشروع مكتمل', icon: Award },
    { number: '100+', label: 'عميل راضي', icon: Building },
    { number: '99.9%', label: 'معدل الرضا', icon: Star },
    { number: '24/7', label: 'دعم مستمر', icon: Shield }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 mr-2" />
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <Star className="w-8 h-8 text-yellow-400 ml-2" />
          </div>
          <h2 className="text-6xl font-bold text-white mb-6 rtl-text">
            آراء <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">عملائنا</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto rtl-text">
            شهادات حقيقية من قادة وخبراء تقنية المعلومات في أكبر المؤسسات
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 rtl-text">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative">
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl"
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            {testimonials[currentSlide] && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <Quote className="w-12 h-12 text-blue-400 mr-4" />
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl text-gray-300 leading-relaxed mb-8 rtl-text">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {testimonials[currentSlide].results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <span className="text-sm text-gray-300 rtl-text">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Profile */}
                <div className="text-center lg:text-right rtl:lg:text-left">
                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                    <div className="text-6xl mb-6">{testimonials[currentSlide].avatar}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 rtl-text">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-gray-400 mb-1">{testimonials[currentSlide].name_en}</p>
                    <p className="text-blue-400 font-semibold mb-1 rtl-text">
                      {testimonials[currentSlide].position}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">{testimonials[currentSlide].position_en}</p>
                    
                    <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                      <span className="text-3xl">{testimonials[currentSlide].logo}</span>
                      <div className="text-left rtl:text-right">
                        <p className="text-white font-medium rtl-text">
                          {testimonials[currentSlide].company}
                        </p>
                        <p className="text-gray-400 text-sm">{testimonials[currentSlide].company_en}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 rtl-text">
                      {testimonials[currentSlide].industry}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center mt-8 space-x-3 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 rtl-text">
            انضم إلى عملائنا الراضين
          </h3>
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            احجز استشارتك المجانية
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
