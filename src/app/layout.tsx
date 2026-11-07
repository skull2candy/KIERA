import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Happy Diwali | Kiera Construction and Developers Pvt. Ltd.',
  description: 'Wishing You a Happy & Prosperous Diwali from Kiera Construction and Developers Pvt. Ltd. South Delhi’s premier residential architectural landmarks.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans bg-[#08080a] text-white min-h-screen overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
        {children}
      </body>
    </html>
  )
}
