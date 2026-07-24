import Link from 'next/link'

export function ServicesSection() {
  return (
    <section className="py-20 bg-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our <span className="text-luxury-gold">Services</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/cars" className="group bg-luxury-800 border border-luxury-700 rounded-xl p-8 hover:border-luxury-gold/50 transition-all">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-luxury-gold transition-colors">Luxury Car Rentals</h3>
            <p className="text-white/60">Browse our fleet of premium vehicles available for rent across Nigeria. From executive sedans to luxury SUVs.</p>
          </Link>
          <Link href="/apartments" className="group bg-luxury-800 border border-luxury-700 rounded-xl p-8 hover:border-luxury-gold/50 transition-all">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-luxury-gold transition-colors">Service Apartments</h3>
            <p className="text-white/60">Comfortable and secure service apartments in prime locations. Perfect for business and leisure stays.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

const demoFeaturedCars = [
  { slug: 'bugatti-chiron', name: 'Bugatti Chiron', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', hp: 1500, seats: 4, engine: '8.0L quad-turbo', price: 'Call for Price' },
  { slug: 'mercedes-benz-s-class', name: 'Mercedes-Benz S-Class', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', hp: 791, seats: 4, engine: '6.0L V12', price: '₦350,000/day' },
  { slug: 'rolls-royce-phantom', name: 'Rolls-Royce Phantom', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&q=80', hp: 563, seats: 4, engine: '6.75L V12', price: '₦500,000/day' },
]

export function FeaturedCarsSection() {
  return (
    <section className="py-20 bg-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div><h2 className="text-3xl sm:text-4xl font-bold">Featured <span className="text-luxury-gold">Cars</span></h2><p className="text-white/50 mt-2">Explore our premium collection</p></div>
          <Link href="/cars" className="text-luxury-gold hover:text-luxury-gold-light text-sm font-semibold">View All →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {demoFeaturedCars.map((car) => (
            <Link key={car.slug} href={`/cars/${car.slug}`} className="group bg-luxury-900 border border-luxury-700 rounded-xl overflow-hidden hover:border-luxury-gold/50 transition-all">
              <div className="h-48 overflow-hidden"><img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-luxury-gold transition-colors">{car.name}</h3>
                <div className="flex gap-3 text-xs text-white/50 mb-3"><span>⚡ {car.hp}hp</span><span>👤 {car.seats} seats</span><span>⚙️ {car.engine}</span></div>
                <p className="text-luxury-gold font-bold">{car.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const demoFeaturedApartments = [
  { slug: 'lagos-studio', name: 'Lagos Studio Apartment', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80', type: 'Studio', beds: 1, price: '₦80,000/night' },
  { slug: 'abuja-1bed', name: 'Abuja 1-Bedroom Apartment', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80', type: '1-Bed', beds: 1, price: '₦120,000/night' },
  { slug: 'lagos-2bed', name: 'Lagos 2-Bedroom Executive', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', type: '2-Bed', beds: 2, price: '₦200,000/night' },
]

export function FeaturedApartmentsSection() {
  return (
    <section className="py-20 bg-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div><h2 className="text-3xl sm:text-4xl font-bold">Premium <span className="text-luxury-gold">Apartments</span></h2><p className="text-white/50 mt-2">Comfortable stays across Nigeria</p></div>
          <Link href="/apartments" className="text-luxury-gold hover:text-luxury-gold-light text-sm font-semibold">View All →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {demoFeaturedApartments.map((a) => (
            <Link key={a.slug} href={`/apartments/${a.slug}`} className="group bg-luxury-800 border border-luxury-700 rounded-xl overflow-hidden hover:border-luxury-gold/50 transition-all">
              <div className="h-48 overflow-hidden"><img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5">
                <div className="inline-block bg-luxury-gold/20 text-luxury-gold text-xs px-2 py-1 rounded mb-2">{a.type}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-luxury-gold transition-colors">{a.name}</h3>
                <p className="text-white/50 text-sm">{a.beds} bedroom</p>
                <p className="text-luxury-gold font-bold mt-2">{a.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustBadgesSection() {
  const badges = [
    { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. Know exactly what you pay for your rental or stay.' },
    { icon: '⭐', title: 'Premium Experience', desc: 'Top-quality vehicles and apartments with exceptional service.' },
    { icon: '📍', title: 'Nationwide Coverage', desc: 'Available in Lagos, Abuja, and major cities across Nigeria.' },
    { icon: '⚡', title: 'Fast Booking', desc: 'Book in minutes via WhatsApp. Quick confirmation and support.' },
  ]
  return (
    <section className="py-20 bg-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Why Choose <span className="text-luxury-gold">Eko Luxury</span></h2>
        <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">We are committed to providing exceptional service and value</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.title} className="text-center bg-luxury-900 border border-luxury-700 rounded-xl p-6">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-semibold mb-2">{b.title}</h3>
              <p className="text-white/50 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const demoTestimonials = [
  { name: 'Mikel Oseni', role: 'Verified Client', quote: 'I love their fast response, they have good service and respect for clients and well experienced in all areas.', rating: 5 },
  { name: 'IUMA STUDIES', role: 'Verified Client', quote: 'I like their fast response to a very good service and respect for clients. Their cars very cozy and reliable. Keep up the good job.', rating: 5 },
  { name: 'Ebunoluwa Olatunbosun', role: 'Verified Client', quote: 'Top-quality service. Everything was well organized and very impressive.', rating: 5 },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">What Our <span className="text-luxury-gold">Clients Say</span></h2>
        <p className="text-white/50 text-center mb-12">Real feedback from our valued customers</p>
        <div className="grid md:grid-cols-3 gap-6">
          {demoTestimonials.map((t) => (
            <div key={t.name} className="bg-luxury-800 border border-luxury-700 rounded-xl p-6">
              <div className="flex text-luxury-gold mb-3">{Array.from({ length: t.rating }).map((_, i) => <span key={i}>★</span>)}</div>
              <p className="text-white/80 text-sm mb-4 italic">"{t.quote}"</p>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-white/50 text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'What cities do you operate in?', a: 'We operate across Nigeria with major hubs in Lagos and Abuja, and services available in Port Harcourt, Ibadan, Enugu, and other major cities.' },
  { q: 'How do I book a car or apartment?', a: 'Simply browse our listings, select your preferred vehicle or apartment, and click "Book Now". Fill in the form and your request will be sent directly to us via WhatsApp.' },
  { q: 'Do you offer cars with drivers?', a: 'Yes, many of our vehicles come with a professional driver option. You can select this when booking.' },
  { q: 'Are the apartments secure?', a: 'All our service apartments are in secure locations with 24/7 security. You can also request additional security measures when booking.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfers, card payments, and cash. Payment terms are discussed during booking.' },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-luxury-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Frequently Asked <span className="text-luxury-gold">Questions</span></h2>
        <p className="text-white/50 text-center mb-12">Everything you need to know</p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-luxury-900 border border-luxury-700 rounded-xl group">
              <summary className="px-6 py-4 font-medium cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-luxury-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-4 text-white/60 text-sm">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-20 bg-luxury-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Book Your <span className="text-luxury-gold">Experience</span> Today</h2>
        <p className="text-white/60 mb-8">Ready to experience luxury? Contact us now to book your dream car or premium apartment.</p>
        <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="inline-block bg-luxury-gold text-luxury-900 px-8 py-3 rounded font-semibold text-lg hover:bg-luxury-gold-light transition-colors">
          Book on WhatsApp
        </a>
      </div>
    </section>
  )
}

const blogPreview = [
  { slug: 'why-choose-luxury-car-rentals-nigeria', title: 'Why Choose Luxury Car Rentals in Nigeria', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80', excerpt: 'Discover the benefits of renting luxury vehicles for your travel needs across Nigeria.', author: 'Robert Fox', date: 'April 3, 2026', category: 'Luxury Cars' },
  { slug: 'top-service-apartments-lagos-business-trip', title: 'Top Service Apartments for Your Lagos Business Trip', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', excerpt: 'Find the perfect service apartment for your next business visit to Lagos.', author: 'Jane Cooper', date: 'April 5, 2026', category: 'Apartments' },
  { slug: 'complete-guide-renting-cars-abuja', title: 'A Complete Guide to Renting Cars in Abuja', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', excerpt: 'Everything you need to know about car rental services in Nigeria\'s capital city.', author: 'Bessie Cooper', date: 'April 7, 2026', category: 'Guide' },
]

export function BlogPreviewSection() {
  return (
    <section className="py-20 bg-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div><h2 className="text-3xl sm:text-4xl font-bold">Latest <span className="text-luxury-gold">Articles</span></h2><p className="text-white/50 mt-2">Insights and guides from our team</p></div>
          <a href="/blog" className="text-luxury-gold hover:text-luxury-gold-light text-sm font-semibold">View All →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPreview.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group bg-luxury-900 border border-luxury-700 rounded-xl overflow-hidden hover:border-luxury-gold/50 transition-all">
              <div className="h-48 overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-white/40 mb-2"><span>{p.date}</span><span>•</span><span>{p.author}</span></div>
                <h3 className="font-semibold mb-2 group-hover:text-luxury-gold transition-colors">{p.title}</h3>
                <p className="text-white/50 text-sm">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}