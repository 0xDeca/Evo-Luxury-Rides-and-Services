import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0e1117] border-t border-[#2a2d33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="text-lg font-bold tracking-wider text-[#F8AC28]">EKO</Link>
            <p className="text-[#84878b] text-sm mt-3 leading-relaxed">Premium luxury car rentals and service apartments across Nigeria. Experience comfort, style, and reliability.</p>
            <p className="text-[#5c5f64] text-xs mt-4">254 Agege Motor Rd, Ikeja, Lagos</p>
            <p className="text-[#F8AC28] text-sm mt-1">0810 783 7959</p>
          </div>

          <div>
            <h4 className="text-[#f2f2f2] font-semibold mb-4 text-sm">Navigation</h4>
            <div className="space-y-2">
              {[{ h: '/', l: 'Home' }, { h: '/about', l: 'About' }, { h: '/cars', l: 'Cars' }, { h: '/apartments', l: 'Apartments' }, { h: '/blog', l: 'Blogs' }, { h: '/contact', l: 'Contact' }].map((l) => (
                <Link key={l.h} href={l.h} className="block text-[#84878b] hover:text-[#f2f2f2] text-sm transition-colors duration-200">{l.l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#f2f2f2] font-semibold mb-4 text-sm">Support</h4>
            <div className="space-y-2 text-[#84878b] text-sm">
              <Link href="/contact" className="block hover:text-[#f2f2f2] transition-colors duration-200">Support</Link>
              <Link href="/refund-policy" className="block hover:text-[#f2f2f2] transition-colors duration-200">Refund Policy</Link>
              <Link href="/terms-and-condition" className="block hover:text-[#f2f2f2] transition-colors duration-200">Terms &amp; Conditions</Link>
              <Link href="/privacy-policy" className="block hover:text-[#f2f2f2] transition-colors duration-200">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[#f2f2f2] font-semibold mb-4 text-sm">Stay Updated</h4>
            <p className="text-[#84878b] text-sm mb-3">Subscribe to our newsletter</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-[#1a1d23] text-[#f2f2f2] text-sm px-3 py-2 rounded-l-lg border border-[#2a2d33] focus:outline-none focus:border-[#F8AC28] w-full min-w-0" />
              <button type="submit" className="bg-[#F8AC28] text-[#0a0e13] px-3 py-2 rounded-r-lg text-sm font-semibold hover:bg-[#e69d1f] transition-colors shrink-0">Subscribe</button>
            </form>
            <p className="text-[#5c5f64] text-xs mt-3">Available 24/7 for your booking needs</p>
            <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F8AC28] text-[#0a0e13] px-5 py-2.5 rounded-[32px] text-sm font-semibold hover:bg-[#e69d1f] transition-colors duration-200 mt-3">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-[#2a2d33] mt-12 pt-6 text-center">
          <p className="text-[#5c5f64] text-xs">&copy; {new Date().getFullYear()} Eko Luxury Rides and Service Apartments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}