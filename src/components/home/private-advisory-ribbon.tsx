import { Calendar, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function PrivateAdvisoryRibbon() {
  const whatsappUrl = "https://wa.me/918800589785?text=Hello%20Kiera%20Homes,%20I%20would%20like%20to%20schedule%20a%20private%20advisory%20viewing."

  return (
    <section className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-yellow-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-amber-400/30 shadow-2xl text-center space-y-8 backdrop-blur-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Private Advisory</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
              Experience the Architecture in Person.
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Arrange a private, accompanied tour with our lead architect. Walk through finished sample suites, inspect structural blueprints, and review freehold title registers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+918800589785"
              className="px-8 h-12 rounded-full bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 text-neutral-950 font-bold text-xs uppercase tracking-[0.20em] shadow-xl shadow-amber-400/10 hover:shadow-amber-400/20 hover:scale-[1.03] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Private Tour</span>
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 h-12 rounded-full border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40 hover:text-emerald-200 text-xs uppercase tracking-[0.20em] font-semibold backdrop-blur-xl transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Concierge</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              Direct Developer Sale (Zero Brokerage)
            </span>
            <span className="text-white/20">•</span>
            <span>Flexible Staggered Payment Schedules</span>
            <span className="text-white/20">•</span>
            <span>Immediate On-Site Physical Inspection</span>
          </div>

        </div>
      </div>
    </section>
  )
}
