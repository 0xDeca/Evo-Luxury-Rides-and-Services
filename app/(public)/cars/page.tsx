'use client'

import { useState } from 'react'
import Link from 'next/link'

const cars = [
  { slug: 'bugatti-chiron', name: 'Bugatti Chiron', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', hp: 1500, seats: 4, engine: '8.0L quad-turbo', transmission: 'Auto', price: 'Call for Price', category: 'Sports' },
  { slug: 'mercedes-benz-s-class', name: 'Mercedes-Benz S-Class', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', hp: 791, seats: 4, engine: '6.0L V12', transmission: 'Auto', price: '₦350,000/day', category: 'Luxury' },
  { slug: 'rolls-royce-phantom', name: 'Rolls-Royce Phantom', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80', hp: 563, seats: 4, engine: '6.75L V12', transmission: 'Auto', price: '₦500,000/day', category: 'Luxury' },
  { slug: 'koenigsegg-jesko', name: 'Koenigsegg Jesko', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', hp: 1280, seats: 4, engine: '5.0L twin-turbo', transmission: 'Auto', price: 'Call for Price', category: 'Sports' },
  { slug: 'bentley-flying-spur', name: 'Bentley Flying Spur', image: 'https://images.unsplash.com/photo-1583753075967-a23c0a5bd0f1?w=800&q=80', hp: 771, seats: 4, engine: '6.0L W12', transmission: 'Auto', price: '₦400,000/day', category: 'Luxury' },
  { slug: 'shelby-cobra', name: 'Shelby Cobra', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', hp: 425, seats: 4, engine: '8.0L quad-turbo', transmission: 'Manual', price: '₦250,000/day', category: 'Sports' },
]

const categories = ['All', 'Luxury', 'Sports', 'Electric', 'SUVs']

export default function CarsPage() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? cars : cars.filter((c) => c.category === filter)

  return (
    <>
      <section className="pt-24 pb-12 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Luxury <span className="text-[#F8AC28]">Fleet</span></h1>
          <p className="text-white/60 max-w-xl mx-auto">Explore our exclusive collection of high-performance and luxury vehicles</p>
        </div>
      </section>

      <section className="pb-20 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded text-sm font-medium transition-colors ${filter === c ? 'bg-[#F8AC28] text-[#0a0e13]' : 'bg-[#0e1117] text-white/70 hover:bg-[#1a1d23]'}`}>{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car) => (
              <Link key={car.slug} href={`/cars/${car.slug}`} className="group bg-[#0e1117] border border-[#2a2d33] rounded-xl overflow-hidden hover:border-[#F8AC28]/30 transition-all">
                <div className="h-56 overflow-hidden"><img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F8AC28] transition-colors">{car.name}</h3>
                  <div className="grid grid-cols-3 gap-2 text-xs text-white/50 mb-3">
                    <span>⚡ {car.hp}hp</span><span>👤 {car.seats} seats</span><span>⚙️ {car.engine}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#F8AC28] font-bold">{car.price}</span>
                    <span className="text-white/40 text-xs">{car.transmission}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}