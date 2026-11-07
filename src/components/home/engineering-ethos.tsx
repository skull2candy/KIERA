'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Compass, Sparkles, Clock } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Seismic Zone IV Integrity',
    description: 'Deep-pile raft foundations and high-tensile Fe-550D steel reinforcements engineered to absorb rigorous seismic stresses.',
    badge: 'Certified RCC Frame'
  },
  {
    icon: Compass,
    number: '02',
    title: 'Artisanal Natural Stone & Finishes',
    description: 'Imported Italian Bottochino marble flooring, thermal-break double glazed acoustic fenestration, and bespoke teak millwork.',
    badge: 'Zero-Porosity Joinery'
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Acoustic Serenity & Daylight Flow',
    description: 'Strategic architectural cross-ventilation and multi-layer sound dampening ensuring peaceful sanctuary living.',
    badge: 'Vastu-Compliant Layouts'
  },
  {
    icon: Clock,
    number: '04',
    title: 'Disciplined Handover Schedule',
    description: '30+ developments completed across South Delhi with a verified on-time possession track record and transparent escrow deeds.',
    badge: '100% RERA & MCD Clearance'
  }
]

export function EngineeringEthos() {
  return (
    <section className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="text-amber-200/90 text-xs uppercase tracking-[0.25em] font-bold flex items-center gap-2">
            <span className="w-6 h-px bg-amber-300" />
            The Kiera Engineering Standard
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white leading-tight">
            Uncompromising rigor. <br />
            <span className="italic font-serif text-amber-200">Enduring permanence.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Every residence bearing the Kiera hallmark is erected under the direct scrutiny of licensed structural engineers and master stonemasons.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-amber-300/80 tracking-widest font-semibold">
                      /{pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-white mb-3 group-hover:text-amber-100 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
                    {pillar.badge}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
