
'use client'

import { motion } from 'framer-motion'
import { Book, Calendar, User, ArrowRight, TrendingUp, Shield, AlertTriangle, Brain, Globe, Lock } from 'lucide-react'
import { useState } from 'react'

export default function SecurityBlog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'الكل', name_en: 'All', icon: Globe },
    { id: 'threats', name: 'التهديدات', name_en: 'Threats', icon: AlertTriangle },
    { id: 'ai', name: 'الذكاء الاصطناعي', name_en: 'AI Security', icon: Brain },
    { id: 'compliance', name: 'الامتثال', name_en: 'Compliance', icon: Shield },
    { id: 'trends', name: 'الاتجاهات', name_en: 'Trends', icon: TrendingUp }
  ]

  const insights = [
    {
      id: 1,
      category: 'threats',
      title: 'تطور هجمات برامج الفدية في 2024',
      title_en: 'Evolution of Ransomware Attacks in 2024',
      excerpt: 'تحليل شامل لأحدث تقنيات هجمات برامج الفدية وكيفية التصدي لها باستخدام تقنيات الذكاء الاصطناعي المتطورة',
      author: 'فريق أبحاث MACFTD',
      date: '15 يناير 2024',
      readTime: '8 دقائق',
      image: '🔒',
      featured: true,
      tags: ['Ransomware', 'AI Defense', 'Threat Analysis']
    },
    {
      id: 2,
      category: 'ai',
      title: 'الذكاء الاصطناعي في الأمن السيبراني',
      title_en: 'AI Revolution in Cybersecurity',
      excerpt: 'كيف تغير تقنيات التعلم الآلي من مشهد الأمن السيبراني وتساعد في اكتشاف التهديدات قبل وقوعها',
      author: 'د. محمد الشريف',
      date: '12 يناير 2024',
      readTime: '12 دقيقة',
      image: '🤖',
      featured: false,
      tags: ['Machine Learning', 'Predictive Security', 'Innovation']
    },
    {
      id: 3,
      category: 'compliance',
      title: 'دليل الامتثال لمعايير SAMA الجديدة',
      title_en: 'SAMA Compliance Guidelines 2024',
      excerpt: 'دليل شامل للمؤسسات المالية للامتثال لأحدث متطلبات مؤسسة النقد العربي السعودي للأمن السيبراني',
      author: 'فاطمة العتيبي',
      date: '10 يناير 2024',
      readTime: '15 دقيقة',
      image: '⚖️',
      featured: false,
      tags: ['SAMA', 'Financial Security', 'Regulations']
    },
    {
      id: 4,
      category: 'trends',
      title: 'توقعات الأمن السيبراني 2024',
      title_en: 'Cybersecurity Predictions 2024',
      excerpt: 'نظرة شاملة على التوجهات المستقبلية في عالم الأمن السيبراني والتقنيات الناشئة التي ستشكل المستقبل',
      author: 'خالد المحمد',
      date: '8 يناير 2024',
      readTime: '10 دقائق',
      image: '🔮',
      featured: true,
      tags: ['Future Tech', 'Predictions', 'Industry Trends']
    },
    {
      id: 5,
      category: 'threats',
      title: 'حماية البيانات في عصر الحوسبة السحابية',
      title_en: 'Cloud Data Protection Strategies',
      excerpt: 'استراتيجيات متقدمة لحماية البيانات الحساسة في البيئات السحابية المختلطة والعامة',
      author: 'سارة الفيصل',
      date: '5 يناير 2024',
      readTime: '11 دقيقة',
      image: '☁️',
      featured: false,
      tags: ['Cloud Security', 'Data Protection', 'Hybrid Cloud']
    },
    {
      id: 6,
      category: 'ai',
      title: 'مستقبل الأمن بتقنيات Quantum',
      title_en: 'Quantum Computing and Security Future',
      excerpt: 'تأثير الحوسبة الكمية على مستقبل التشفير والأمان، والاستعداد للتحديات القادمة',
      author: 'عبدالله الرشيد',
      date: '2 يناير 2024',
      readTime: '14 دقيقة',
      image: '⚛️',
      featured: false,
      tags: ['Quantum Computing', 'Encryption', 'Future Security']
    }
  ]

  const filteredInsights = selectedCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory)

  const featuredInsights = insights.filter(insight => insight.featured)

  return (
    <section id="insights" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
      
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
            <Book className="w-10 h-10 text-blue-400 mr-3" />
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-6xl font-bold text-white mb-6 rtl-text">
            رؤى <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">أمنية</span> متقدمة
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto rtl-text">
            أحدث الأبحاث والتحليلات المتخصصة في عالم الأمن السيبراني من خبراء MACFTD
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="rtl-text">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 rtl-text flex items-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 ml-3" />
              المقالات المميزة
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredInsights.map((insight, index) => (
                <motion.article
                  key={insight.id}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-6xl">{insight.image}</span>
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        مميز
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 rtl-text group-hover:text-blue-300 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{insight.title_en}</p>
                    
                    <p className="text-gray-300 mb-6 rtl-text leading-relaxed">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {insight.tags.map((tag, idx) => (
                        <span key={idx} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm rtl-text">{insight.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-400 text-sm">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <Calendar className="w-4 h-4" />
                          <span>{insight.date}</span>
                        </div>
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse hover:shadow-lg transition-all duration-300">
                      <span className="rtl-text">اقرأ المقال كاملاً</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {filteredInsights.filter(insight => !insight.featured || selectedCategory !== 'all').map((insight, index) => (
            <motion.article
              key={insight.id}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{insight.image}</div>
                
                <h3 className="text-xl font-bold text-white mb-2 rtl-text group-hover:text-blue-300 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{insight.title_en}</p>
                
                <p className="text-gray-300 text-sm mb-4 rtl-text leading-relaxed">
                  {insight.excerpt.substring(0, 100)}...
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {insight.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span className="rtl-text">{insight.author}</span>
                  <span>{insight.readTime}</span>
                </div>
                
                <button className="w-full bg-slate-700/50 hover:bg-blue-600/20 text-gray-300 hover:text-blue-300 py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all duration-300">
                  <span className="rtl-text">اقرأ المزيد</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Lock className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-white mb-6 rtl-text">
            ابق على اطلاع دائم
          </h3>
          <p className="text-xl text-gray-300 mb-8 rtl-text max-w-2xl mx-auto">
            اشترك في نشرتنا الإخبارية للحصول على أحدث المقالات والتحليلات الأمنية مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex max-w-md mx-auto space-x-4 rtl:space-x-reverse">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
              اشترك
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
