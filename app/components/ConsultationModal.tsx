"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Send, User, Mail, Phone, Building } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ConsultationModal({ open, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
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
            تواصل مع خبرائنا في الأمن السيبراني للحصول على تقييم مجاني
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
              الاسم الكامل
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-12 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                placeholder="أحمد محمد"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-12 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                placeholder="example@company.com"
                required
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

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 rtl-text">
              كيف يمكننا مساعدتك؟
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-cyber-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-green focus:outline-none transition-colors resize-none"
              placeholder="اكتب هنا التفاصيل حول احتياجاتك الأمنية..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-cyber-green to-cyber-blue text-black py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" />
            <span className="rtl-text">إرسال الطلب</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}