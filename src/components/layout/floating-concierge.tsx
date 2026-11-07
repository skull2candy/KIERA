'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, X, ShieldCheck, Sparkles } from 'lucide-react'

export function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const phone = '+91 88005 89785'
  const whatsappUrl = 'https://wa.me/918800589785?text=Hello%20Kiera%20Homes,%20I%20would%20like%20to%20inquire%20about%20your%20South%20Delhi%20residences.'

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-4 w-72 rounded-3xl bg-neutral-900/95 border border-amber-400/30 p-5 shadow-2xl backdrop-blur-2xl text-white space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-bold text-amber-200">VIP Concierge</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white"
                aria-label="Close Concierge"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Connect directly with our senior development advisory for floor plan CAD blueprints, price sheets, and private site visits.
            </p>

            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Advisory</span>
              </a>

              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/10"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Developer</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-2xl shadow-amber-300/20 cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>VIP Advisory</span>
      </motion.button>
    </div>
  )
}
