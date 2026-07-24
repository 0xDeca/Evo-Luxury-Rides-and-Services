import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About <span className="text-luxury-gold">Eko Luxury</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto">Your trusted partner for luxury car rentals and service apartments across Nigeria</p>
        </div>
      </section>

      <section className="py-16 bg-luxury-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our <span className="text-luxury-gold">Mission</span></h2>
              <p className="text-white/70 leading-relaxed">To provide exceptional luxury transportation and accommodation solutions across Nigeria. We are committed to delivering premium experiences that exceed expectations, combining world-class vehicles and apartments with outstanding customer service.</p>
            </div>
            <div className="bg-luxury-900 border border-luxury-700 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-luxury-gold mb-2">4.0</p>
              <p className="text-white/60">★★★★★ (14 reviews)</p>
              <p className="text-white/50 text-sm mt-2">Based on Google Maps reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Our <span className="text-luxury-gold">Values</span></h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[{ icon: '🤝', title: 'Integrity', desc: 'Honest pricing, transparent service, and reliable bookings.' }, { icon: '✨', title: 'Excellence', desc: 'Premium vehicles and apartments maintained to the highest standards.' }, { icon: '🇳🇬', title: 'Nationwide', desc: 'Serving Lagos, Abuja, and major cities across Nigeria.' }].map((v) => (
              <div key={v.title} className="bg-luxury-800 border border-luxury-700 rounded-xl p-6"><div className="text-3xl mb-3">{v.icon}</div><h3 className="font-semibold mb-2">{v.title}</h3><p className="text-white/50 text-sm">{v.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">By the <span className="text-luxury-gold">Numbers</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[{ n: '50+', l: 'Luxury Vehicles' }, { n: '25+', l: 'Premium Apartments' }, { n: '15+', l: 'Cities Covered' }, { n: '24/7', l: 'Customer Support' }].map((s) => (
              <div key={s.l}><p className="text-3xl font-bold text-luxury-gold">{s.n}</p><p className="text-white/60 text-sm">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-900 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience <span className="text-luxury-gold">Luxury</span>?</h2>
          <p className="text-white/60 mb-6">Contact us today to book your dream car or premium apartment.</p>
          <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="inline-block bg-luxury-gold text-luxury-900 px-8 py-3 rounded font-semibold hover:bg-luxury-gold-light transition-colors">Book Now</a>
        </div>
      </section>
    </>
  )
}