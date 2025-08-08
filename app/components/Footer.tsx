
'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cyber-dark border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center space-x-2 rtl:space-x-reverse"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-8 h-8 text-cyber-green" />
              <span className="text-2xl font-cyber font-bold text-white">ZeroDay</span>
            </motion.div>
            <p className="text-gray-400 rtl-text">
              شركة رائدة في الأمن السيبراني واختبار الاختراق
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white rtl-text">الخدمات</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyber-green transition-colors rtl-text">اختبار الاختراق</a></li>
              <li><a href="#" className="hover:text-cyber-green transition-colors rtl-text">حماية المواقع</a></li>
              <li><a href="#" className="hover:text-cyber-green transition-colors rtl-text">التدريب الأمني</a></li>
              <li><a href="#" className="hover:text-cyber-green transition-colors rtl-text">الاستجابة للحوادث</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white rtl-text">تواصل معنا</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@zeroday-sec.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="rtl-text">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white rtl-text">تابعنا</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyber-green transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyber-green transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyber-green transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 rtl-text">
            &copy; 2024 Project ZeroDay. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
