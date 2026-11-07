'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowUpRight, MapPin, Building2, SlidersHorizontal, ShieldCheck } from 'lucide-react'

const heroSlides = [
  {
    image: '/api/files/1758694148211-5lliewyzgge.png',
    title: 'London House IV',
    location: 'Sector C, Pocket 8, Vasant Kunj',
    tag: 'Flagship Residence',
    price: '₹1.60 Cr - ₹2.20 Cr',
    bhk: '3 & 4 BHK Crafted Floors'
  },
  {
    image: '/api/files/1758621408736-ahnuelo733j.png',
    title: 'Rhyan Square Tower C',
    location: 'Mehrauli Heritage Corridor',
    tag: 'Architectural Landmark',
    price: '₹1.35 Cr - ₹1.80 Cr',
    bhk: '2 & 3 BHK Sky Condos'
  },
  {
    image: '/api/files/1758616645095-llsalxjjt5h.png',
    title: 'London House II',
    location: 'Vasant Kunj Enclave',
    tag: 'Completed Masterpiece',
    price: '₹1.45 Cr - ₹1.95 Cr',
    bhk: '3 BHK Bespoke Floors'
  },
  {
    image: '/api/files/1758795037736-r1aav5vrfim.png',
    title: 'Tulip Residence',
    location: 'Mahipalpur Prime Corridor',
    tag: 'Modern Urban Living',
    price: 'From ₹48 Lakhs',
    bhk: '1 & 2 BHK Smart Homes'
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [locality, setLocality] = useState('')
  const [bhk, setBhk] = useState('')
  const [budget, setBudget] = useState('')
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const p = new URLSearchParams()
    if (locality) p.append('locality', locality)
    if (bhk) p.append('bhk', bhk)
    if (budget) p.append('price', budget)
    router.push(`/portfolio?${p.toString()}`)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-neutral-950 text-white overflow-hidden pt-28 pb-12">
      {/* Background with Ken Burns zoom animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover object-center filter brightness-[0.38] contrast-[1.12]"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Typography */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-amber-400/30 backdrop-blur-xl shadow-lg shadow-amber-400/5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-300 font-medium">
              Architectural Distinction • South Delhi
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] text-amber-200 font-bold tracking-wider">
              {slide.tag}
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-light tracking-tight text-white leading-[1.06]">
              Sculpting <br className="hidden sm:inline" />
              <span className="font-normal italic bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-300 bg-clip-text text-transparent font-serif">
                Timeless Form
              </span> & Light.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light max-w-2xl leading-relaxed">
              Curating South Delhi’s most distinguished residential developments across Vasant Kunj, Mehrauli, and Mahipalpur. Engineered with seismic integrity, natural limestone, and acoustic serenity.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link 
              href="/portfolio"
              className="inline-flex items-center px-8 h-12 rounded-full bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 text-neutral-950 font-bold text-xs uppercase tracking-[0.20em] shadow-xl shadow-amber-300/10 hover:shadow-amber-300/20 hover:scale-[1.03] transition-all"
            >
              <span>Explore 30+ Residences</span>
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Link>

            <a 
              href="https://wa.me/918800589785?text=Hello%20Kiera%20Homes,%20I%20would%20like%20to%20schedule%20a%20private%20advisory%20viewing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 h-12 rounded-full border border-white/20 text-neutral-200 hover:text-white hover:bg-white/10 text-xs uppercase tracking-[0.20em] font-semibold backdrop-blur-xl transition-all"
            >
              Schedule Private Viewing
            </a>

            {/* Current Slide Highlight Card */}
            <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-white/15 bg-neutral-900/40 backdrop-blur-md rounded-2xl py-2 px-4 border border-white/5">
              <div className="text-left">
                <p className="text-[10px] text-amber-200/80 uppercase tracking-widest">{slide.location}</p>
                <p className="text-sm font-serif font-medium text-white">{slide.title}</p>
                <p className="text-xs text-neutral-400">{slide.bhk}</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-500/30">
                {slide.price}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Property Search Console */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-neutral-900/85 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full p-3 sm:p-4 shadow-2xl hover:border-amber-400/30 transition-colors"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
            
            {/* Locality */}
            <div className="relative px-3 py-1.5 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-white/10">
              <label htmlFor="home-locality" className="text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold flex items-center gap-1.5 mb-1">
                <MapPin className="h-3 w-3 text-amber-300" />
                Select Locality
              </label>
              <select
                id="home-locality"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="bg-transparent text-xs font-medium text-white focus:outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="" className="bg-neutral-900 text-neutral-300">All South Delhi Localities</option>
                <option value="Vasant Kunj" className="bg-neutral-900 text-white">Vasant Kunj (Sector C & D)</option>
                <option value="Mehrauli" className="bg-neutral-900 text-white">Mehrauli Heritage Ward</option>
                <option value="Mahipalpur" className="bg-neutral-900 text-white">Mahipalpur Prime Corridor</option>
                <option value="Saket" className="bg-neutral-900 text-white">Saket & Saidulajab</option>
              </select>
            </div>

            {/* BHK */}
            <div className="relative px-3 py-1.5 flex flex-col justify-center border-b sm:border-b-0 lg:border-r border-white/10">
              <label htmlFor="home-bhk" className="text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold flex items-center gap-1.5 mb-1">
                <Building2 className="h-3 w-3 text-amber-300" />
                Configuration
              </label>
              <select
                id="home-bhk"
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="bg-transparent text-xs font-medium text-white focus:outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="" className="bg-neutral-900 text-neutral-300">Any Layout</option>
                <option value="1" className="bg-neutral-900 text-white">1 BHK Smart Floor</option>
                <option value="2" className="bg-neutral-900 text-white">2 BHK Classic Suite</option>
                <option value="3" className="bg-neutral-900 text-white">3 BHK Luxury Residence</option>
                <option value="4" className="bg-neutral-900 text-white">4 BHK Sky Penthouse</option>
              </select>
            </div>

            {/* Budget */}
            <div className="relative px-3 py-1.5 flex flex-col justify-center border-b lg:border-b-0 border-white/10">
              <label htmlFor="home-budget" className="text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold flex items-center gap-1.5 mb-1">
                <SlidersHorizontal className="h-3 w-3 text-amber-300" />
                Investment Range
              </label>
              <select
                id="home-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-transparent text-xs font-medium text-white focus:outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="" className="bg-neutral-900 text-neutral-300">All Price Brackets</option>
                <option value="budget" className="bg-neutral-900 text-white">Under ₹50 Lakhs (Affordable)</option>
                <option value="mid-range" className="bg-neutral-900 text-white">₹50 Lakhs - ₹1.2 Cr (Mid-Range)</option>
                <option value="luxury" className="bg-neutral-900 text-white">₹1.2 Cr - ₹2.5 Cr+ (Ultra-Luxury)</option>
              </select>
            </div>

            {/* Submit */}
            <div className="p-1">
              <button
                type="submit"
                className="w-full h-11 rounded-xl md:rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 hover:from-amber-300 hover:to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-[0.16em] shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Find Residence</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Slide Progress Ticker */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 pb-2 text-xs text-neutral-400 gap-4">
          <div className="flex items-center gap-2">
            {heroSlides.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? 'w-9 h-1.5 bg-gradient-to-r from-amber-200 to-yellow-400'
                    : 'w-2 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}: ${s.title}`}
              />
            ))}
            <span className="text-[11px] font-mono text-neutral-400 pl-2">
              0{currentSlide + 1} / 0{heroSlides.length}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" />
              100% RERA Registered
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline">
              30+ Completed Deliveries
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-amber-200">
              Seismic Zone IV Engineered
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
