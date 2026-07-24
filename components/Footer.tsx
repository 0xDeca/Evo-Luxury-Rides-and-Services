import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-luxury-800 border-t border-luxury-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold text-luxury-gold">EKO</span>
              <span className="text-sm text-white/80">Luxury Rides</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Premium luxury car rentals and service apartments across Nigeria. Experience comfort, style, and reliability.</p>
            <p className="text-white/50 text-xs">254 Agege Motor Rd, Ikeja, Lagos</p>
            <p className="text-luxury-gold text-sm mt-1">0810 783 7959</p>
            <p className="text-white/50 text-xs mt-1">Open 24 hours</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[{ h: '/', l: 'Home' }, { h: '/about', l: 'About' }, { h: '/cars', l: 'Cars' }, { h: '/apartments', l: 'Apartments' }, { h: '/blog', l: 'Blog' }, { h: '/contact', l: 'Contact' }].map((l) => (
                <Link key={l.h} href={l.h} className="block text-white/60 hover:text-luxury-gold text-sm transition-colors">{l.l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p>Luxury Car Rentals</p>
              <p>Service Apartments</p>
              <p>Chauffeur Services</p>
              <p>Corporate Booking</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="inline-block bg-luxury-gold text-luxury-900 px-5 py-2 rounded text-sm font-semibold hover:bg-luxury-gold-light transition-colors mb-3">
              WhatsApp Us
            </a>
            <p className="text-white/50 text-xs mt-2">info@ekoluxuryrides.com</p>
          </div>
        </div>

        <div className="border-t border-luxury-700/50 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Eko Luxury Rides and Service Apartments. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/40">
            <Link href="/refund-policy" className="hover:text-luxury-gold transition-colors">Refund Policy</Link>
            <Link href="/terms-and-condition" className="hover:text-luxury-gold transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}