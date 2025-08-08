
import type { Metadata } from 'next'
import { Tajawal, Orbitron, Roboto_Condensed } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap'
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'MACFTD - خبراء الأمن السيبراني',
  description: 'شركة متخصصة في الأمن السيبراني واختبار الاختراق - Cybersecurity & Penetration Testing Experts',
  keywords: 'أمن سيبراني, اختبار اختراق, حماية مواقع, cybersecurity, penetration testing, MACFTD',
  authors: [{ name: 'MACFTD' }],
  robots: 'index, follow',
  openGraph: {
    title: 'MACFTD - خبراء الأمن السيبراني',
    description: 'شركة متخصصة في الأمن السيبراني واختبار الاختراق',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MACFTD - خبراء الأمن السيبراني',
    description: 'شركة متخصصة في الأمن السيبراني واختبار الاختراق',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${orbitron.variable} ${robotoCondensed.variable}`}>
      <body className="bg-cyber-dark text-white font-arabic overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
