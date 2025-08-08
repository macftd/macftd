
'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Award, Globe, ExternalLink } from 'lucide-react'

export default function Footer() {
  const services = [
    'اختبار الاختراق المتقدم',
    'حلول الحماية المؤسسية', 
    'الذكاء الاصطناعي للأمن',
    'التدريب التنفيذي المتخصص',
    'أمان البنية التحتية',
    'الامتثال التنظيمي'
  ]

  const certifications = [
    { name: 'ISO 27001', icon: '🏆' },
    { name: 'NIST Framework', icon: '🛡️' },
    { name: 'GDPR Compliant', icon: '⚖️' },
    { name: 'SAMA Guidelines', icon: '🏛️' }
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'تويتر' },
    { icon: Linkedin, href: '#', label: 'لينكد إن' },
    { icon: Instagram, href: '#', label: 'إنستغرام' },
    { icon: Github, href: '#', label: 'جيت هب' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 border-t border-blue-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-3 rtl:space-x-reverse"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  MACFTD
                </span>
                <p className="text-gray-400 text-sm">Cybersecurity Excellence</p>
              </div>
            </motion.div>
            
            <p className="text-gray-400 rtl-text leading-relaxed">
              شركة رائدة في مجال الأمن السيبراني، نقدم حلول متطورة وخدمات استشارية متخصصة لحماية الأصول الرقمية وضمان استمرارية الأعمال.
            </p>
            
            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold rtl-text">الشهادات والمعايير</h4>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse bg-slate-800/50 rounded-lg p-2">
                    <span className="text-lg">{cert.icon}</span>
                    <span className="text-xs text-gray-300">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white rtl-text flex items-center">
              <Shield className="w-6 h-6 ml-2 text-blue-400" />
              خدماتنا
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: '#60A5FA' }}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer rtl-text text-sm"
                >
                  <span className="text-blue-400 mr-2">→</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white rtl-text flex items-center">
              <Globe className="w-6 h-6 ml-2 text-blue-400" />
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                'الرئيسية',
                'من نحن', 
                'الخدمات',
                'المقالات',
                'اتصل بنا',
                'الوظائف'
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: '#60A5FA' }}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer rtl-text text-sm"
                >
                  <span className="text-blue-400 mr-2">→</span>
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white rtl-text flex items-center">
              <Phone className="w-6 h-6 ml-2 text-blue-400" />
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm">info@macftd.sa</p>
                  <p className="text-gray-400 text-xs rtl-text">البريد الإلكتروني</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm">+966 11 234 5678</p>
                  <p className="text-gray-400 text-xs rtl-text">هاتف</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm rtl-text">الرياض، المملكة العربية السعودية</p>
                  <p className="text-gray-400 text-xs rtl-text">المقر الرئيسي</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold rtl-text">تابعنا على</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <p className="text-gray-400 text-sm">
                © 2024 MACFTD. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors rtl-text">سياسة الخصوصية</a>
                <span>|</span>
                <a href="#" className="hover:text-blue-400 transition-colors rtl-text">الشروط والأحكام</a>
                <span>|</span>
                <a href="#" className="hover:text-blue-400 transition-colors rtl-text">خريطة الموقع</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">
                حاصل على جائزة أفضل شركة أمن سيبراني 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
