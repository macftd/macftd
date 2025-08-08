
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project ZeroDay - خبراء الأمن السيبراني',
  description: 'شركة متخصصة في الأمن السيبراني واختبار الاختراق - Cybersecurity & Penetration Testing Experts',
  keywords: 'أمن سيبراني, اختبار اختراق, حماية مواقع, cybersecurity, penetration testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&family=Orbitron:wght@400;500;700;900&family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cyber-dark text-white font-arabic overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
