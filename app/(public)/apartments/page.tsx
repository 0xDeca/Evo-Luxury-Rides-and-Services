'use client'

import { useState } from 'react'
import Link from 'next/link'

const apartments = [
  { slug: 'lagos-studio', name: 'Lagos Studio Apartment', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', type: 'studio', beds: 1, baths: 1, size: 35, price: '₦80,000/night', location: 'Ikeja, Lagos', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Parking'] },
  { slug: 'abuja-studio', name: 'Abuja Studio Apartment', image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80', type: 'studio', beds: 1, baths: 1, size: 40, price: '₦90,000/night', location: 'Central Area, Abuja', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Gym'] },
  { slug: 'lagos-1bed', name: 'Lagos 1-Bedroom Executive', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', type: '1-bed', beds: 1, baths: 1, size: 55, price: '₦120,000/night', location: 'Victoria Island, Lagos', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Pool', 'Parking'] },
  { slug: 'abuja-1bed', name: 'Abuja 1-Bedroom Premium', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', type: '1-bed', beds: 1, baths: 1, size: 60, price: '₦130,000/night', location: 'Wuse, Abuja', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Gym', 'Parking'] },
  { slug: 'lagos-2bed', name: 'Lagos 2-Bedroom Executive', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80', type: '2-bed', beds: 2, baths: 2, size: 85, price: '₦200,000/night', location: 'Ikeja, Lagos', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Pool', 'Gym', 'Parking'] },
  { slug: 'portharcourt-2bed', name: 'Port Harcourt 2-Bedroom', image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80', type: '2-bed', beds: 2, baths: 2, size: 80, price: '₦180,000/night', location: 'GRA, Port Harcourt', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Parking'] },
  { slug: 'lagos-3bed', name: 'Lagos 3-Bedroom Luxury', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80', type: '3-bed', beds: 3, baths: 3, size: 120, price: '₦350,000/night', location: 'Lekki, Lagos', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Pool', 'Gym', 'Parking', 'Smart TV'] },
  { slug: 'abuja-3bed', name: 'Abuja 3-Bedroom Penthouse', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', type: '3-bed', beds: 3, baths: 3, size: 130, price: '₦380,000/night', location: 'Maitama, Abuja', amenities: ['AC', 'WiFi', 'Generator', 'Security', 'Pool', 'Gym', 'Parking', 'Smart TV'] },
]

const types = ['All', 'studio', '1-bed', '2-bed', '3-bed']

export default function ApartmentsPage() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? apartments : apartments.filter((a) => a.type === filter)

  return (
    <>
      <section className="pt-24 pb-12 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Premium Service <span className="text-[#F8AC28]">Apartments</span></h1>
          <p className="text-white/60 max-w-xl mx-auto">Comfortable and secure apartments across Nigeria</p>
        </div>
      </section>

      <section className="pb-20 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {types.map((t) => (
              <button key={t} onClick={() => setFilter(t)} className={`px-4 py-2 rounded text-sm font-medium transition-colors ${filter === t ? 'bg-[#F8AC28] text-[#0a0e13]' : 'bg-[#0e1117] text-white/70 hover:bg-[#1a1d23]'}`}>{t === 'All' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <Link key={a.slug} href={`/apartments/${a.slug}`} className="group bg-[#0e1117] border border-[#2a2d33] rounded-xl overflow-hidden hover:border-[#F8AC28]/30 transition-all">
                <div className="h-56 overflow-hidden"><img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#F8AC28]/20 text-[#F8AC28] text-xs px-2 py-1 rounded">{a.type.charAt(0).toUpperCase() + a.type.slice(1)}</span>
                    <span className="text-white/40 text-xs">{a.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F8AC28] transition-colors">{a.name}</h3>
                  <div className="flex gap-3 text-xs text-white/50 mb-3">
                    <span>{a.beds} bed</span><span>{a.baths} bath</span><span>{a.size} sqm</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {a.amenities.slice(0, 4).map((am) => <span key={am} className="bg-[#1a1d23] text-white/60 text-xs px-2 py-0.5 rounded">{am}</span>)}
                  </div>
                  <p className="text-[#F8AC28] font-bold">{a.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}