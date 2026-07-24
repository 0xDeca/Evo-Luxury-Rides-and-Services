import Link from 'next/link'

const stats = [
  { n: '4', l: 'Years Experience' },
  { n: '20+', l: 'Premium Vehicles' },
  { n: '98%', l: 'Client Satisfaction' },
  { n: '24/7', l: 'Support Availability' },
]

const values = [
  { title: 'Transparent', desc: 'We believe in clear pricing with no hidden charges. What you see is exactly what you pay for your rental or stay.' },
  { title: 'Quality First', desc: 'Every vehicle and apartment in our collection is inspected, maintained, and ready for a premium experience.' },
  { title: 'Customer Commitment', desc: 'From booking to return, we ensure smooth communication and reliable support at every step.' },
]

const team = [
  { name: 'Albert Flores', role: 'Senior Operations Executive' },
  { name: 'Floyd Miles', role: 'Lead Chauffeur & Car Enthusiast' },
  { name: 'Arlene McCoy', role: 'Business Consultant' },
  { name: 'Robert Fox', role: 'Luxury Travel Consultant' },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Explore the world of <span className="text-[#F8AC28]">Luxury</span>
          </h1>
          <p className="text-white/50 text-lg">Driven by Passion. Powered by Precision.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0e1117]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our <span className="text-[#F8AC28]">Story</span></h2>
              <p className="text-white/60 leading-relaxed">We started with a simple goal — to make luxury car rentals and premium apartment stays seamless and accessible across Nigeria. From a small premium fleet to a trusted luxury service platform, our journey has been driven by a commitment to excellence.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Mission &amp; <span className="text-[#F8AC28]">Vision</span></h2>
              <p className="text-white/60 leading-relaxed">To provide effortless access to premium vehicles and accommodations. To become the most trusted luxury rental and hospitality platform across Nigeria.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0e13]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">
            Our Impact in <span className="text-[#F8AC28]">Numbers</span>
          </h2>
          <p className="text-white/50 text-center -mt-8 mb-12">A reflection of our commitment, growth, and customer trust over the years.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="text-center bg-[#0e1117] border border-[#2a2d33] rounded-xl p-6">
                <p className="text-3xl sm:text-4xl font-bold text-[#F8AC28]">{s.n}</p>
                <p className="text-white/50 text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0e1117]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Our <span className="text-[#F8AC28]">Journey</span>
          </h2>
          <p className="text-white/50 text-center mb-10">From a small premium fleet to a trusted luxury service platform.</p>
          <div className="space-y-4">
            {[
              { title: 'Premium Fleet', desc: 'Carefully maintained premium vehicles and apartments' },
              { title: 'Transparent Pricing', desc: 'No hidden fees, clear upfront costs' },
              { title: 'Fast Booking', desc: 'Quick and secure booking process via WhatsApp' },
              { title: '24/7 Support', desc: 'Round-the-clock customer service' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0a0e13] border border-[#2a2d33] rounded-xl p-5">
                <div className="w-8 h-8 bg-[#F8AC28]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#F8AC28]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0e13]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            What <span className="text-[#F8AC28]">Drives Us</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#0e1117] border border-[#2a2d33] rounded-xl p-6">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0e1117]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            Meet Our <span className="text-[#F8AC28]">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-[#0a0e13] border border-[#2a2d33] rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-[#F8AC28]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#F8AC28] font-bold">{m.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-sm">{m.name}</h3>
                <p className="text-white/40 text-xs mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0e13] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Experience <span className="text-[#F8AC28]">Luxury</span>?
          </h2>
          <p className="text-white/50 mb-6">Contact us today to book your dream car or premium apartment.</p>
          <Link href="/cars" className="inline-block bg-[#F8AC28] text-[#0a0e13] px-8 py-3 rounded font-semibold hover:bg-[#e69d1f] transition-colors">
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}