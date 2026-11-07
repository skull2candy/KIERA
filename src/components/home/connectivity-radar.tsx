'use client'

import { motion } from 'framer-motion'
import { Plane, Building2, ShoppingBag, HeartPulse, Navigation, Clock } from 'lucide-react'

const hubs = [
  {
    name: 'Indira Gandhi International Airport (T3)',
    category: 'Aviation Gateway',
    time: '12 Mins',
    dist: '8.4 km',
    icon: Plane,
    accent: 'border-emerald-500/30 text-emerald-400'
  },
  {
    name: 'Aerocity Worldmark & Hospitality District',
    category: 'Commercial & Dining',
    time: '08 Mins',
    dist: '5.2 km',
    icon: Building2,
    accent: 'border-amber-400/30 text-amber-300'
  },
  {
    name: 'Ambience Mall & DLF Promenade Vasant Kunj',
    category: 'Retail & Lifestyle',
    time: '04 Mins',
    dist: '2.1 km',
    icon: ShoppingBag,
    accent: 'border-yellow-400/30 text-yellow-300'
  },
  {
    name: 'Fortis Flt Lt Rajan Dhall Hospital',
    category: 'Super-Specialty Healthcare',
    time: '05 Mins',
    dist: '2.8 km',
    icon: HeartPulse,
    accent: 'border-cyan-400/30 text-cyan-300'
  }
]

export function ConnectivityRadar() {
  return (
    <section className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-2xl space-y-3 mb-16">
          <span className="text-amber-200/90 text-xs uppercase tracking-[0.25em] font-bold flex items-center gap-2">
            <Navigation className="h-3.5 w-3.5 text-amber-300" />
            Strategic South Delhi Geo-Positioning
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
            Connectivity <span className="italic font-serif text-amber-200">Radar</span>.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Direct arterial connections via Nelson Mandela Marg, NH-48, and Mehrauli-Gurgaon Road ensure minimal transit friction across NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon
            return (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {hub.dist}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    {hub.category}
                  </span>
                  <h3 className="text-base font-serif font-medium text-white mb-4 group-hover:text-amber-100 transition-colors">
                    {hub.name}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 flex items-center gap-1.5 font-light">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    Drive Time
                  </span>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-neutral-950 border ${hub.accent}`}>
                    {hub.time}
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
