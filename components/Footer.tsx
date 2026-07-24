import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-luxury-800 border-t border-luxury-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-wider text-luxury-gold">EKO</Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">Premium luxury car rentals and service apartments across Nigeria. Experience comfort, style, and reliability.</p>
            <p className="text-white/40 text-xs mt-4">254 Agege Motor Rd, Ikeja, Lagos</p>
            <p className="text-luxury-gold text-sm mt-1">0810 783 7959</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {[{ h: '/', l: 'Home' }, { h: '/about', l: 'About' }, { h: '/cars', l: 'Cars' }, { h: '/apartments', l: 'Apartments' }, { h: '/blog', l: 'Blogs' }, { h: '/contact', l: 'Contact' }].map((l) => (
                <Link key={l.h} href={l.h} className="block text-white/50 hover:text-white text-sm transition-colors">{l.l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-white/50 text-sm">
              <Link href="/contact" className="block hover:text-white transition-colors">Support</Link>
              <Link href="/refund-policy" className="block hover:text-white transition-colors">Refund Policy</Link>
              <Link href="/terms-and-condition" className="block hover:text-white transition-colors">Terms &amp; Conditions</Link>
              <Link href="/privacy-policy" className="block hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-white/50 text-sm mb-3">Available 24/7 for your booking needs</p>
            <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="inline-block bg-luxury-gold text-luxury-900 px-5 py-2.5 rounded text-sm font-semibold hover:bg-luxury-gold-light transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-luxury-700/50 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Eko Luxury Rides and Service Apartments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}