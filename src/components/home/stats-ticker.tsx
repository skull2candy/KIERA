'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Layers, ShieldCheck } from 'lucide-react'

const metrics = [
  {
    icon: Building2,
    value: '30+',
    label: 'Developments Delivered',
    subtext: 'Across Prime South Delhi'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Resident Families',
    subtext: 'Living in Kiera Homes'
  },
  {
    icon: Layers,
    value: '1.2M+',
    label: 'Sq. Ft. Constructed',
    subtext: 'Engineered Precision Area'
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Clear Freehold Registry',
    subtext: 'Bank & RERA Approved'
  }
]

export function StatsTicker() {
  return (
    <section className="py-20 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-amber-400/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-amber-400/30 transition-all text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="text-4xl sm:text-5xl font-serif font-light text-white mb-2 tracking-tight group-hover:text-amber-100 transition-colors">
                  {item.value}
                </span>

                <span className="text-sm font-semibold text-neutral-200 tracking-wide mb-1">
                  {item.label}
                </span>

                <span className="text-xs text-neutral-500 font-light">
                  {item.subtext}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
