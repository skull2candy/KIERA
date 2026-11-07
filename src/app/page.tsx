'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ParticlesCanvas } from '@/components/particles-canvas'
import { LuxuryDiya } from '@/components/luxury-diya'

export default function LuxuryDiwaliLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-white flex flex-col justify-between items-center overflow-x-hidden selection:bg-[#dfcca6] selection:text-neutral-950 font-sans">
      
      {/* 1. CINEMATIC BACKGROUND ATMOSPHERE */}
      {/* HTML5 Canvas with floating golden dust & bokeh particles */}
      <ParticlesCanvas />

      {/* Subtle radial lighting & espresso undertones */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(168,110,42,0.14),rgba(7,7,9,0)_70%)]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_80%_90%,rgba(218,165,32,0.06),transparent_50%)]" 
      />
      {/* Subtle ambient light ray overlay */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(135deg,rgba(223,204,166,0.02)_0%,transparent_40%,rgba(224,138,60,0.03)_100%)]" 
      />

      {/* 2. TOP NAVIGATION / HEADER */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 sm:pt-10 flex items-center justify-between">
        
        {/* Company Logo at Upper-Left */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
        >
          <div className="relative h-11 sm:h-13 w-auto flex items-center">
            <Image
              src="/kiera-logo.png"
              alt="Kiera Homes - Kiera Construction & Developers Pvt. Ltd."
              width={180}
              height={56}
              priority
              className="h-9 sm:h-11 md:h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_16px_rgba(255,255,255,0.15)] transition-opacity duration-300 hover:opacity-90"
            />
          </div>
        </motion.div>

        {/* Top-Right Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/[0.03] border border-[#dfcca6]/25 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e08a3c] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e08a3c] shadow-[0_0_8px_#e08a3c]" />
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#dfcca6]/90">
              WEBSITE REDESIGN IN PROGRESS
            </span>
          </div>
        </motion.div>
      </header>

      {/* 3. HERO & CENTRAL DIWALI EXPERIENCE */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center my-auto py-10 sm:py-14">
        
        {/* Animated Diya Focal Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <LuxuryDiya />
        </motion.div>

        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 sm:mb-6"
        >
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#dfcca6]/85 font-medium px-4 py-1 rounded-full border border-[#dfcca6]/15 bg-white/[0.02] backdrop-blur-sm">
            FESTIVAL OF LIGHTS &amp; PROSPERITY
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white/95 leading-[1.12]"
          >
            Wishing You a
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08]"
          >
            <span className="gold-shimmer-text italic font-normal tracking-tight">
              Happy &amp; Prosperous
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08]"
          >
            <span className="gold-shimmer-text font-normal tracking-tight">
              Diwali
            </span>
          </motion.div>
        </div>

        {/* Company Signature */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-6 sm:mb-7"
        >
          {/* Subtle horizontal gold hairline accent */}
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-[#dfcca6]/40 to-transparent mb-3 sm:mb-4" />
          
          <p className="text-xs sm:text-sm md:text-base font-sans font-light tracking-[0.16em] uppercase text-neutral-300/90">
            from{' '}
            <span className="font-semibold text-[#dfcca6] tracking-[0.2em]">
              KIERA CONSTRUCTION AND DEVELOPERS PVT. LTD.
            </span>
          </p>

          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-[#dfcca6]/40 to-transparent mt-3 sm:mb-4" />
        </motion.div>

        {/* Festive Wishing Message */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-neutral-300/80 font-serif italic max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12 font-light"
        >
          &ldquo;May this divine festival illuminate your life with joy, good health, peace, and boundless prosperity.&rdquo;
        </motion.p>

        {/* 4. REDEVELOPMENT STATUS CARD (Glass & Metal Interface) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-lg glass-metal-panel p-6 sm:p-7 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-[#dfcca6]/45 group shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Subtle top edge glow highlight */}
          <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#dfcca6]/50 to-transparent pointer-events-none" />

          {/* Card Title & Glowing Amber Status */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-left">
              <span className="block text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-neutral-400">
                WEBSITE REDESIGN
              </span>
              <span className="block text-xs sm:text-sm font-sans font-semibold tracking-[0.15em] text-[#dfcca6] uppercase">
                WORK IN PROGRESS
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#e08a3c]/10 border border-[#e08a3c]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e08a3c] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e08a3c]" />
              </span>
              <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-[#e08a3c]">
                Live Crafting
              </span>
            </div>
          </div>

          {/* Animated Progress Bar with Continuous Light Sweep */}
          <div className="relative w-full h-1.5 bg-neutral-900/90 rounded-full overflow-hidden border border-white/5 mb-4">
            {/* Base bar */}
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#8a5d24] via-[#dfcca6] to-[#e08a3c] relative">
              {/* Highlight sweep moving across */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-progress-sweep pointer-events-none" />
            </div>
          </div>

          {/* Supporting message */}
          <p className="text-xs sm:text-sm text-neutral-400/90 font-sans font-light leading-relaxed text-left">
            We are crafting a brand-new digital experience. Something exceptional is taking shape. We&apos;ll be back soon!
          </p>
        </motion.div>

      </main>

      {/* 5. MINIMAL LUXURY FOOTER */}
      <footer className="relative z-10 w-full py-6 px-6 sm:px-10 text-center border-t border-white/[0.04]">
        <p className="text-[11px] sm:text-xs text-neutral-500 font-sans font-light tracking-wider">
          &copy; {new Date().getFullYear()} Kiera Construction and Developers Pvt. Ltd. All rights reserved.
        </p>
      </footer>

    </div>
  )
}
