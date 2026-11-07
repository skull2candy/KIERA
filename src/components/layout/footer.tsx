import Link from 'next/link'
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-200 to-yellow-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center font-serif text-lg font-bold text-amber-200">
                  K
                </div>
              </div>
              <span className="font-serif text-2xl tracking-wider font-bold">KIERA</span>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Curators of artisanal, earthquake-resistant residential landmarks across Vasant Kunj, Mehrauli, and Mahipalpur.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px] uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Freehold RERA Registered
            </div>
          </div>

          {/* Col 2: South Delhi Corridors */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-200 font-bold">
              Prime Localities
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link href="/portfolio?locality=Vasant+Kunj" className="hover:text-white transition-colors">Vasant Kunj (Sector C & D)</Link></li>
              <li><Link href="/portfolio?locality=Mehrauli" className="hover:text-white transition-colors">Mehrauli Heritage Corridor</Link></li>
              <li><Link href="/portfolio?locality=Mahipalpur" className="hover:text-white transition-colors">Mahipalpur Prime Living</Link></li>
              <li><Link href="/portfolio?locality=Saket" className="hover:text-white transition-colors">Saket & Saidulajab</Link></li>
            </ul>
          </div>

          {/* Col 3: Architectural Categories */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-200 font-bold">
              Residences
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link href="/portfolio?status=ready" className="hover:text-white transition-colors">Ready to Move Floors</Link></li>
              <li><Link href="/portfolio?status=ongoing" className="hover:text-white transition-colors">Under Construction Condos</Link></li>
              <li><Link href="/portfolio?bhk=3" className="hover:text-white transition-colors">3 & 4 BHK Crafted Suites</Link></li>
              <li><Link href="/portfolio?bhk=1" className="hover:text-white transition-colors">1 & 2 BHK Smart Homes</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Office */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-200 font-bold">
              Private Concierge
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>157, E/9, G/F Kishangarh Near Ambience Tower, Vasant Kunj, New Delhi - 110070</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+918800589785" className="hover:text-white font-medium">+91 88005 89785</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <a href="mailto:kieraconstructions@gmail.com" className="hover:text-white">kieraconstructions@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Kiera Construction & Developers Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Seismic Zone IV Compliant</span>
            <span>•</span>
            <span>Zero Brokerage (Direct Builder)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
