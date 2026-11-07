'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-neutral-950/85 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-gradient-to-b from-neutral-950/90 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-500 p-0.5 shadow-lg shadow-amber-300/15">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center font-serif text-lg font-bold text-amber-200">
                K
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wider text-white group-hover:text-amber-200 transition-colors font-semibold">
                KIERA
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-neutral-400 font-medium">
                South Delhi Living
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-md">
            {[
              { label: 'Home', href: '/' },
              { label: 'All Residences', href: '/portfolio' },
              { label: 'Vasant Kunj', href: '/portfolio?locality=Vasant+Kunj' },
              { label: 'Mehrauli', href: '/portfolio?locality=Mehrauli' },
              { label: 'Mahipalpur', href: '/portfolio?locality=Mahipalpur' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/918800589785?text=Hello%20Kiera%20Homes,%20I%20would%20like%20to%20inquire%20about%20your%20South%20Delhi%20residences."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/40 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Advisory</span>
            </a>

            <a
              href="tel:+918800589785"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 hover:opacity-95 transition-all shadow-md shadow-amber-300/10"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-950" />
              <span>+91 88005 89785</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white border border-white/10 rounded-full"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-white/10 bg-neutral-950/95 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'All Residences', href: '/portfolio' },
                { label: 'Vasant Kunj Corridor', href: '/portfolio?locality=Vasant+Kunj' },
                { label: 'Mehrauli Luxury', href: '/portfolio?locality=Mehrauli' },
                { label: 'Mahipalpur Living', href: '/portfolio?locality=Mahipalpur' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a 
                  href="https://wa.me/918800589785" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                >
                  WhatsApp Advisory
                </a>
                <a 
                  href="tel:+918800589785" 
                  className="w-full text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-200 to-yellow-400 text-neutral-950"
                >
                  Call +91 88005 89785
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
