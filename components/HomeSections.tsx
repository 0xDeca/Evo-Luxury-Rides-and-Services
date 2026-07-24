import Link from 'next/link'

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" /></svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  )
}

const categories = [
  { name: 'Luxury Cars', count: '20 cars available', slug: '/cars?category=Luxury' },
  { name: 'Electric Cars', count: '12 cars available', slug: '/cars?category=Electric' },
  { name: 'Sports Cars', count: '10 cars available', slug: '/cars?category=Sports' },
  { name: 'SUVs', count: '16 cars available', slug: '/cars?category=SUVs' },
  { name: 'Service Apartments', count: '8 apartments available', slug: '/apartments' },
]

export function CategoriesSection() {
  return (
    <section className="py-20 bg-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Explore Our <span className="text-luxury-gold">Categories</span>
        </h2>
        <p className="text-white/50 text-center -mt-8 mb-12">We&apos;ll help you find the perfect ride or stay</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((c) => (
            <Link key={c.name} href={c.slug} className="group bg-luxury-900 border border-luxury-700 rounded-xl p-6 text-center hover:border-luxury-gold/50 transition-all">
              <p className="text-lg font-semibold mb-1 group-hover:text-luxury-gold transition-colors">{c.name}</p>
              <p className="text-white/40 text-sm">{c.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const demoFeaturedCars = [
  { slug: 'bugatti-chiron', name: 'Bugatti Chiron', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', hp: 1500, seats: 4, engine: '8.0L quad-turbo', transmission: 'Auto', price: 'Call for Price' },
  { slug: 'mercedes-benz-s-class', name: 'Mercedes-Benz S-Class', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', hp: 791, seats: 4, engine: '6.0L V12', transmission: 'Auto', price: '₦350,000/day' },
  { slug: 'rolls-royce-phantom', name: 'Rolls-Royce Phantom', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&q=80', hp: 563, seats: 4, engine: '6.75L V12', transmission: 'Auto', price: '₦500,000/day' },
  { slug: 'koenigsegg-jesko', name: 'Koenigsegg Jesko', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80', hp: 1280, seats: 4, engine: '5.0L twin-turbo', transmission: 'Auto', price: 'Call for Price' },
  { slug: 'bentley-flying-spur', name: 'Bentley Flying Spur', image: 'https://images.unsplash.com/photo-1583753075967-a23c0a5bd0f1?w=600&q=80', hp: 771, seats: 4, engine: '6.0L W12', transmission: 'Auto', price: '₦400,000/day' },
  { slug: 'shelby-cobra', name: 'Shelby Cobra', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80', hp: 425, seats: 4, engine: '8.0L quad-turbo', transmission: 'Manual', price: '₦250,000/day' },
]

export function FeaturedCarsSection() {
  return (
    <section className="py-20 bg-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Explore Popular <span className="text-luxury-gold">Car Models</span>
        </h2>
        <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">Latest car reviews and releases. We&apos;ll help you rent with confidence.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoFeaturedCars.map((car) => (
            <Link key={car.slug} href={`/cars/${car.slug}`} className="group bg-luxury-800 border border-luxury-700 rounded-xl overflow-hidden hover:border-luxury-gold/50 transition-all">
              <div className="h-52 overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-luxury-gold transition-colors">{car.name}</h3>
                <div className="flex items-center gap-3 text-xs text-white/50 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    {car.hp} hp
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {car.seats} seats
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {car.engine}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold font-bold">{car.price}</span>
                  <span className="text-white/30 text-xs">{car.transmission}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/cars" className="inline-block border border-luxury-gold text-luxury-gold px-8 py-3 rounded font-semibold hover:bg-luxury-gold/10 transition-colors">
            Explore All Cars
          </Link>
        </div>
      </div>
    </section>
  )
}

const trustItems = [
  { title: 'Transparent Pricing', desc: 'Know your rental cost upfront. Tools to estimate pricing, rental plans, coverage, and more with no hidden fees.' },
  { title: 'Premium Experience', desc: 'Daily mileage limits and multiple locations across major Nigerian cities for your convenience.' },
  { title: 'Easy Booking', desc: 'Know before you buy: Honest listings, reviews, and fast WhatsApp booking process.' },
  { title: 'Fast Process', desc: 'A skilled team dedicated to making your rental and stay experience seamless from start to finish.' },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Why You Can <span className="text-luxury-gold">Trust Us</span>
        </h2>
        <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">Explore both stylish sports cars and comfortable apartments</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="bg-luxury-900 border border-luxury-700 rounded-xl p-6">
              <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center mb-4">
                <CheckIcon />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
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
  { name: 'Chidi Okonkwo', role: 'Verified Client', quote: 'Excellent service from start to finish. The apartment was pristine and the car was immaculate. Will definitely use again.', rating: 5 },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Trusted by Clients <span className="text-luxury-gold">Worldwide</span>
        </h2>
        <p className="text-white/50 text-center mb-12">Genuine feedback from customers who value quality and reliability.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoTestimonials.map((t) => (
            <div key={t.name} className="bg-luxury-800 border border-luxury-700 rounded-xl p-6">
              <div className="flex text-luxury-gold mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const blogPreview = [
  { slug: 'why-choose-luxury-car-rentals-nigeria', title: 'Why Choose Luxury Car Rentals in Nigeria', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80', excerpt: 'Discover the benefits of renting luxury vehicles for your travel needs across Nigeria.', author: 'Robert Fox', date: 'April 3, 2026', category: 'Luxury Cars' },
  { slug: 'top-service-apartments-lagos-business-trip', title: 'Top Service Apartments for Your Lagos Business Trip', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', excerpt: 'Find the perfect service apartment for your next business visit to Lagos.', author: 'Jane Cooper', date: 'April 5, 2026', category: 'Apartments' },
  { slug: 'complete-guide-renting-cars-abuja', title: 'A Complete Guide to Renting Cars in Abuja', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', excerpt: 'Everything you need to know about car rental services in Nigeria&apos;s capital city.', author: 'Bessie Cooper', date: 'April 7, 2026', category: 'Guide' },
]

export function BlogPreviewSection() {
  return (
    <section className="py-20 bg-luxury-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Latest <span className="text-luxury-gold">Articles</span>
        </h2>
        <p className="text-white/50 text-center mb-12">Explore both stylish sports cars and comfortable apartment stays</p>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPreview.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-luxury-900 border border-luxury-700 rounded-xl overflow-hidden hover:border-luxury-gold/50 transition-all">
              <div className="h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
                  <span>{p.date}</span>
                  <span>•</span>
                  <span>{p.author}</span>
                </div>
                <span className="inline-block bg-luxury-gold/20 text-luxury-gold text-xs px-2 py-0.5 rounded mb-2">{p.category}</span>
                <h3 className="font-semibold mb-2 group-hover:text-luxury-gold transition-colors">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.excerpt}</p>
                <span className="text-luxury-gold text-sm font-semibold mt-3 inline-block group-hover:translate-x-1 transition-transform">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blog" className="inline-block border border-luxury-gold text-luxury-gold px-8 py-3 rounded font-semibold hover:bg-luxury-gold/10 transition-colors">
            Explore All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'What cities do you operate in?', a: 'We operate across Nigeria with major hubs in Lagos and Abuja, and services available in Port Harcourt, Ibadan, Enugu, and other major cities.' },
  { q: 'How do I book a car or apartment?', a: 'Simply browse our listings, select your preferred vehicle or apartment, and click "Book Now". Fill in the form and your request will be sent directly to us via WhatsApp with instant confirmation.' },
  { q: 'Do you offer cars with drivers?', a: 'Yes, many of our vehicles come with a professional driver option. You can select this when booking through our form.' },
  { q: 'Are the apartments secure?', a: 'All our service apartments are in secure locations with 24/7 security. You can also request additional security measures when booking.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfers, card payments, and cash. Payment terms are discussed during booking confirmation.' },
  { q: 'Can I cancel or modify my booking?', a: 'Yes, you can cancel or modify your booking by contacting us via WhatsApp. Please refer to our refund policy for details on cancellation timelines.' },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-luxury-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Popular <span className="text-luxury-gold">Questions</span>
        </h2>
        <p className="text-white/50 text-center mb-12">Explore the questions we get asked the most</p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-luxury-800 border border-luxury-700 rounded-xl group">
              <summary className="px-6 py-4 font-medium cursor-pointer list-none flex justify-between items-center text-sm">
                {faq.q}
                <svg className="w-4 h-4 text-luxury-gold group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-4 text-white/50 text-sm leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-20 bg-luxury-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/8 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Reserve Your <span className="text-luxury-gold">Premium Experience</span> Today
        </h2>
        <p className="text-white/50 mb-8 max-w-lg mx-auto">Latest luxury cars and premium apartments. We&apos;ll help you book with confidence.</p>
        <Link href="/cars" className="inline-block bg-luxury-gold text-luxury-900 px-8 py-3.5 rounded font-semibold text-lg hover:bg-luxury-gold-light transition-colors">
          Book Your Dream Car
        </Link>
      </div>
    </section>
  )
}