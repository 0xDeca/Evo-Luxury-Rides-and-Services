'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import BookingForm from '@/components/BookingForm'

const cars = [
  { slug: 'bugatti-chiron', name: 'Bugatti Chiron', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80', hp: 1500, seats: 4, engine: '8.0L quad-turbo', transmission: 'Auto', price: 'Call for Price', category: 'Sports', description: 'The Bugatti Chiron is the ultimate hyper sports car. With its quad-turbocharged 8.0-liter W16 engine producing 1,500 horsepower, it represents the pinnacle of automotive engineering. Experience unparalleled luxury and performance on Nigerian roads.' },
  { slug: 'mercedes-benz-s-class', name: 'Mercedes-Benz S-Class', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80', hp: 791, seats: 4, engine: '6.0L V12', transmission: 'Auto', price: '₦350,000/day', category: 'Luxury', description: 'The Mercedes-Benz S-Class defines luxury saloon excellence. With its V12 engine and cutting-edge technology, it offers an unmatched driving experience. Perfect for executive travel and special occasions.' },
  { slug: 'rolls-royce-phantom', name: 'Rolls-Royce Phantom', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=1200&q=80', hp: 563, seats: 4, engine: '6.75L V12', transmission: 'Auto', price: '₦500,000/day', category: 'Luxury', description: 'The Rolls-Royce Phantom is the pinnacle of automotive luxury. Every detail is crafted to perfection, offering a serene and opulent driving experience. The ultimate statement of success and sophistication.' },
  { slug: 'koenigsegg-jesko', name: 'Koenigsegg Jesko', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80', hp: 1280, seats: 4, engine: '5.0L twin-turbo', transmission: 'Auto', price: 'Call for Price', category: 'Sports', description: 'The Koenigsegg Jesko is a masterpiece of Swedish engineering. With 1,280 horsepower and advanced aerodynamics, it delivers breathtaking performance. A true driver\'s car for the ultimate thrill.' },
  { slug: 'bentley-flying-spur', name: 'Bentley Flying Spur', image: 'https://images.unsplash.com/photo-1583753075967-a23c0a5bd0f1?w=1200&q=80', hp: 771, seats: 4, engine: '6.0L W12', transmission: 'Auto', price: '₦400,000/day', category: 'Luxury', description: 'The Bentley Flying Spur combines grand touring comfort with exhilarating performance. Its W12 engine delivers effortless power while the handcrafted interior provides unsurpassed luxury.' },
  { slug: 'shelby-cobra', name: 'Shelby Cobra', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80', hp: 425, seats: 4, engine: '8.0L quad-turbo', transmission: 'Manual', price: '₦250,000/day', category: 'Sports', description: 'The Shelby Cobra is an American icon. With its raw power and manual transmission, it delivers a pure, unadulterated driving experience that connects you to the road like no other.' },
]

export default function CarDetailPage() {
  const params = useParams()
  const car = cars.find((c) => c.slug === params.slug)
  const [showBooking, setShowBooking] = useState(false)
  const [withDriver, setWithDriver] = useState(false)

  if (!car) return <div className="pt-24 text-center text-white/60">Car not found</div>

  const related = cars.filter((c) => c.category === car.category && c.slug !== car.slug).slice(0, 3)

  return (
    <>
      <section className="pt-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/cars" className="text-luxury-gold hover:text-luxury-gold-light text-sm">&larr; Back to Cars</Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden h-80 sm:h-96"><img src={car.image} alt={car.name} className="w-full h-full object-cover" /></div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{car.name}</h1>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[{ label: 'Horsepower', value: `${car.hp} hp` }, { label: 'Seats', value: `${car.seats} seats` }, { label: 'Engine', value: car.engine }, { label: 'Transmission', value: car.transmission }].map((s) => (
                  <div key={s.label} className="bg-luxury-800 border border-luxury-700 rounded-lg p-3"><p className="text-white/50 text-xs">{s.label}</p><p className="font-semibold">{s.value}</p></div>
                ))}
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">{car.description}</p>
              <div className="text-2xl text-luxury-gold font-bold mb-4">{car.price}</div>
              <label className="flex items-center gap-3 mb-6 text-sm">
                <input type="checkbox" checked={withDriver} onChange={(e) => setWithDriver(e.target.checked)} className="accent-luxury-gold w-4 h-4" />
                <span>With Driver</span>
              </label>
              <button onClick={() => setShowBooking(true)} className="w-full bg-luxury-gold text-luxury-900 py-3 rounded font-semibold hover:bg-luxury-gold-light transition-colors">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-luxury-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Similar <span className="text-luxury-gold">Cars</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/cars/${r.slug}`} className="group bg-luxury-900 border border-luxury-700 rounded-xl overflow-hidden hover:border-luxury-gold/50 transition-all">
                  <div className="h-40 overflow-hidden"><img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                  <div className="p-4"><h3 className="font-semibold group-hover:text-luxury-gold">{r.name}</h3><p className="text-luxury-gold font-bold text-sm mt-1">{r.price}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {showBooking && <BookingForm serviceType="car" itemId={car.slug} itemName={car.name} onClose={() => setShowBooking(false)} />}
    </>
  )
}