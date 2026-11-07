'use client'

import { motion } from 'framer-motion'

export function LuxuryDiya() {
  return (
    <div className="relative flex items-center justify-center select-none">
      
      {/* Outer ambient warm glow pulsing behind diya */}
      <div 
        className="absolute -inset-10 rounded-full bg-gradient-to-t from-amber-500/25 via-amber-400/20 to-transparent blur-[50px] animate-diya-halo pointer-events-none" 
      />

      {/* Primary Circular Glass Frame */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-orb flex items-center justify-center p-3"
      >
        {/* Subtle rotating ornamental dashed ring */}
        <div 
          className="absolute inset-1.5 rounded-full border border-dashed border-champagne/30 animate-[spin_40s_linear_infinite] pointer-events-none" 
        />

        {/* Inner concentric ring */}
        <div 
          className="absolute inset-3 rounded-full border border-white/10 pointer-events-none" 
        />

        {/* Diya SVG Composition */}
        <div className="relative w-full h-full flex flex-col items-center justify-center pt-2">
          
          {/* Flame Container */}
          <div className="relative -mb-1 flex items-center justify-center">
            
            {/* Outer Flame Glow */}
            <div className="absolute w-12 h-16 rounded-full bg-amber-400/40 blur-md animate-flame-flicker pointer-events-none" />

            {/* Realistic layered SVG Flame */}
            <div className="relative w-8 h-12 origin-bottom animate-flame-flicker">
              <svg 
                viewBox="0 0 32 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_12px_rgba(245,158,11,0.85)]"
              >
                <defs>
                  {/* Outer flame gradient */}
                  <linearGradient id="flameOuter" x1="16" y1="0" x2="16" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fff3cc" />
                    <stop offset="25%" stopColor="#ffb703" />
                    <stop offset="65%" stopColor="#fb8500" />
                    <stop offset="100%" stopColor="#d00000" stopOpacity="0.8" />
                  </linearGradient>

                  {/* Inner flame core gradient */}
                  <linearGradient id="flameInner" x1="16" y1="8" x2="16" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="45%" stopColor="#fff3b0" />
                    <stop offset="100%" stopColor="#f39c12" />
                  </linearGradient>

                  {/* Pure bright spark center */}
                  <radialGradient id="sparkCenter" cx="50%" cy="60%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#ffe699" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffaa00" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Outer Flame Teardrop */}
                <path
                  d="M16 2 C18.5 12 28 20 28 32 C28 40.8366 22.6274 46 16 46 C9.37258 46 4 40.8366 4 32 C4 20 13.5 12 16 2 Z"
                  fill="url(#flameOuter)"
                />

                {/* Inner Bright Core */}
                <path
                  d="M16 10 C17.8 17 22 23 22 33 C22 38.5 19.5 42 16 42 C12.5 42 10 38.5 10 33 C10 23 14.2 17 16 10 Z"
                  fill="url(#flameInner)"
                  className="origin-bottom animate-flame-core"
                />

                {/* White-Hot Flame Seed */}
                <ellipse cx="16" cy="34" rx="3.5" ry="5.5" fill="url(#sparkCenter)" />
              </svg>
            </div>

            {/* Wick */}
            <div className="absolute bottom-0 w-0.5 h-2 bg-[#2a1b0a] rounded-full" />
          </div>

          {/* Brass / Terracotta Sculpted Diya Base */}
          <div className="relative w-16 h-7 sm:w-18 sm:h-8">
            <svg 
              viewBox="0 0 72 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            >
              <defs>
                <linearGradient id="brassBase" x1="0" y1="0" x2="72" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8c6c2e" />
                  <stop offset="25%" stopColor="#d4af37" />
                  <stop offset="50%" stopColor="#f3e8d2" />
                  <stop offset="75%" stopColor="#b38728" />
                  <stop offset="100%" stopColor="#5c4519" />
                </linearGradient>

                <linearGradient id="rimShine" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a8842c" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#a8842c" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Diya Bowl Body */}
              <path
                d="M4 10 C10 26 62 26 68 10 C62 14 10 14 4 10 Z"
                fill="url(#brassBase)"
              />

              {/* Upper Rim */}
              <ellipse 
                cx="36" 
                cy="10" 
                rx="32" 
                ry="4" 
                fill="#4a3617" 
                stroke="url(#rimShine)" 
                strokeWidth="1.2" 
              />

              {/* Inner Oil Bath with reflection */}
              <ellipse cx="36" cy="10.5" rx="26" ry="2.5" fill="#251608" />
              <ellipse cx="36" cy="10" rx="14" ry="1.5" fill="rgba(255, 170, 64, 0.55)" />

              {/* Diya Pedestal Stand */}
              <path
                d="M26 22 L46 22 L49 28 L23 28 Z"
                fill="url(#brassBase)"
              />
              <ellipse cx="36" cy="28" rx="13" ry="1.8" fill="#a37e2c" />
            </svg>
          </div>

        </div>
      </motion.div>

      {/* Floating Sparkles around the Diya */}
      <span className="absolute -top-2 -right-1 w-1.5 h-1.5 rounded-full bg-gold-light animate-ping opacity-75 pointer-events-none" />
      <span className="absolute bottom-2 -left-3 w-1 h-1 rounded-full bg-amber-warm animate-pulse opacity-80 pointer-events-none" />
      <span className="absolute -top-4 left-2 w-1 h-1 rounded-full bg-yellow-200 animate-ping opacity-60 pointer-events-none" />
    </div>
  )
}
