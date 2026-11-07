'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, ArrowUpRight, MapPin, Building2 } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface ProjectShowcaseProps {
  initialProjects: any[]
}

export function ResidencesShowcase({ initialProjects }: ProjectShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filtered = initialProjects.filter(p => {
    if (activeFilter === 'ALL') return true
    if (activeFilter === 'READY') {
      const s = (p.projectStatus || '').toLowerCase()
      return s.includes('ready') || s.includes('available')
    }
    if (activeFilter === 'ONGOING') {
      const s = (p.projectStatus || '').toLowerCase()
      return s.includes('ongoing') || s.includes('under') || s.includes('pre')
    }
    if (activeFilter === 'VASANT_KUNJ') {
      return (p.location || '').toLowerCase().includes('vasant')
    }
    return true
  })

  const tabs = [
    { id: 'ALL', label: 'All Curated Residences' },
    { id: 'READY', label: 'Immediate Handover' },
    { id: 'ONGOING', label: 'Under Construction' },
    { id: 'VASANT_KUNJ', label: 'Vasant Kunj Corridor' },
  ]

  return (
    <section className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-amber-200/90 text-xs uppercase tracking-[0.25em] font-bold flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Curated Architectural Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white leading-tight">
              Signature <span className="italic font-serif text-amber-200">Residences</span>.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Explore our landmark releases across South Delhi combining bespoke finishes, prime freehold land parcels, and seismic structural fidelity.
            </p>
          </div>

          <Link 
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 hover:border-amber-300/40 text-neutral-200 hover:text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all hover:bg-white/5"
          >
            <span>View All ({initialProjects.length}+) Residences</span>
            <ArrowUpRight className="h-4 w-4 ml-2 text-amber-300" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-amber-200 to-yellow-400 text-neutral-950 shadow-lg shadow-amber-300/10 scale-[1.02]'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-900 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, 6).map((project, idx) => {
              const displayImage = project.coverUrl || (project.images && project.images[0]) || '/placeholder-image.png'
              const statusLabel = project.projectStatus || 'Available'
              const isReady = statusLabel.toLowerCase().includes('ready') || statusLabel.toLowerCase().includes('immediate')

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-neutral-900/60 border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/5"
                >
                  <Link href={`/projects/${project.slug}`} className="relative aspect-[16/11] overflow-hidden block">
                    <Image
                      src={displayImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 filter brightness-90 group-hover:scale-105 group-hover:brightness-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-semibold backdrop-blur-md border ${
                        isReady 
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30' 
                          : 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                      }`}>
                        {statusLabel}
                      </span>

                      {project.bhkAvailable && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-gradient-to-r from-amber-200 to-yellow-400 text-neutral-950 font-bold shadow-md">
                          {project.bhkAvailable}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    {project.startingPrice && (
                      <div className="absolute bottom-3 left-4 z-10">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-light">From</span>
                        <span className="font-mono text-base sm:text-lg font-bold text-white">
                          {formatPrice(project.startingPrice)}*
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-light">
                        <MapPin className="h-3.5 w-3.5 text-amber-300 flex-shrink-0" />
                        <span className="truncate">{project.location}{project.city ? `, ${project.city}` : ''}</span>
                      </div>

                      <Link href={`/projects/${project.slug}`}>
                        <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-amber-200 transition-colors leading-snug font-medium">
                          {project.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2">
                        {project.shortDescription || project.description || 'Bespoke residential architectural development with premium finishes and clear title freehold deeds.'}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 capitalize">
                        {project.propertyType || 'Residential'}
                      </span>

                      <Link 
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] font-semibold text-amber-200 hover:text-white transition-colors group/link"
                      >
                        <span>Examine Plans</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 text-amber-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
