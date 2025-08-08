
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react'

interface ConsultationModalProps {
  onClose: () => void
}

export default function ConsultationModal({ onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Close modal after submission
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-cyber-gray border border-gray-700 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 rtl-text">
              احجز استشارة <span className="text-cyber-green">مجانية</span>
            </h2>
            <p className="text-gray-300 rtl-text">
              تواصل مع خبرائنا في الأمن السيبراني للحصول على تقييم مجاني لحالة أمانك الرقمي
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
                الاسم الكامل *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-12 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
                البريد الإلكتروني *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-12 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                  placeholder="example@company.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
                رقم الهاتف
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-12 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                  placeholder="+966 5X XXX XXXX"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
                اسم الشركة
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                placeholder="اسم شركتك"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
                الخدمة المطلوبة
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
              >
                <option value="">اختر الخدمة</option>
                <option value="penetration-testing">اختبار الاختراق</option>
                <option value="web-security">حماية المواقع الإلكترونية</option>
                <option value="training">تدريب الأمن السيبراني</option>
                <option value="monitoring">مراقبة الأمان 24/7</option>
                <option value="assessment">تقييم الأمان</option>
                <option value="incident-response">الاستجابة للحوادث</option>
                <option value="consultation">استشارة عامة</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
                رسالتك
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-12 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-cyber-green to-cyber-blue text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyber-green/30 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span className="rtl-text">إرسال الطلب</span>
            </motion.button>
          </form>

          {/* Footer Note */}
          <p className="text-xs text-gray-400 text-center mt-6 rtl-text">
            سنتواصل معك خلال 24 ساعة من تاريخ إرسال الطلب
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
