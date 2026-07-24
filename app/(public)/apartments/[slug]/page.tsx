'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import BookingForm from '@/components/BookingForm'

const apartments = [
  { slug: 'lagos-studio', name: 'Lagos Studio Apartment', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80', type: 'Studio', beds: 1, baths: 1, size: 35, price: '₦80,000/night', location: 'Ikeja, Lagos', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Parking', 'Smart TV', 'Kitchenette'], description: 'A modern and cozy studio apartment in the heart of Ikeja, Lagos. Perfect for short business trips or a comfortable stay. Fully furnished with all modern amenities for a hassle-free experience.' },
  { slug: 'abuja-studio', name: 'Abuja Studio Apartment', image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80', type: 'Studio', beds: 1, baths: 1, size: 40, price: '₦90,000/night', location: 'Central Area, Abuja', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Gym Access', 'Kitchen'], description: 'A stylish studio apartment in Abuja\'s central business district. Ideal for professionals and travelers seeking comfort and convenience in the capital city.' },
  { slug: 'lagos-1bed', name: 'Lagos 1-Bedroom Executive', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80', type: '1-Bed', beds: 1, baths: 1, size: 55, price: '₦120,000/night', location: 'Victoria Island, Lagos', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Swimming Pool', 'Parking', 'Fully Equipped Kitchen'], description: 'A luxurious 1-bedroom apartment on Victoria Island, Lagos\'s premier business district. Enjoy premium comfort with access to pool and gym facilities.' },
  { slug: 'abuja-1bed', name: 'Abuja 1-Bedroom Premium', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80', type: '1-Bed', beds: 1, baths: 1, size: 60, price: '₦130,000/night', location: 'Wuse, Abuja', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Gym', 'Parking', 'Washer'], description: 'A premium 1-bedroom apartment in Abuja\'s upscale Wuse district. Well-appointed with modern furnishings and top-notch amenities for a superior stay.' },
  { slug: 'lagos-2bed', name: 'Lagos 2-Bedroom Executive', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80', type: '2-Bed', beds: 2, baths: 2, size: 85, price: '₦200,000/night', location: 'Ikeja, Lagos', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Pool', 'Gym', 'Parking', 'Fully Equipped Kitchen', 'Smart TV'], description: 'A spacious 2-bedroom executive apartment in Ikeja. Perfect for families or colleagues traveling together. All the comforts of home with luxury touches.' },
  { slug: 'portharcourt-2bed', name: 'Port Harcourt 2-Bedroom', image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=80', type: '2-Bed', beds: 2, baths: 2, size: 80, price: '₦180,000/night', location: 'GRA, Port Harcourt', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Parking', 'Kitchen', 'Living Room'], description: 'A comfortable 2-bedroom apartment in Port Harcourt\'s Government Reserve Area. Ideal for business travelers and families visiting the garden city.' },
  { slug: 'lagos-3bed', name: 'Lagos 3-Bedroom Luxury', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80', type: '3-Bed', beds: 3, baths: 3, size: 120, price: '₦350,000/night', location: 'Lekki, Lagos', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Pool', 'Gym', 'Parking', 'Smart TV', 'Fully Equipped Kitchen', 'Balcony'], description: 'A stunning 3-bedroom luxury apartment in Lekki, Lagos. Spacious living areas, premium finishes, and access to world-class amenities. The ultimate choice for discerning guests.' },
  { slug: 'abuja-3bed', name: 'Abuja 3-Bedroom Penthouse', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', type: '3-Bed', beds: 3, baths: 3, size: 130, price: '₦380,000/night', location: 'Maitama, Abuja', amenities: ['Air Conditioning', 'Free WiFi', 'Generator', '24/7 Security', 'Pool', 'Gym', 'Parking', 'Smart TV', 'Fully Equipped Kitchen', 'Balcony', 'Study Room'], description: 'A magnificent penthouse in Abuja\'s most prestigious neighborhood. Panoramic views, premium furnishings, and exceptional amenities define this luxury living space.' },
]

export default function ApartmentDetailPage() {
  const params = useParams()
  const apt = apartments.find((a) => a.slug === params.slug)
  const [showBooking, setShowBooking] = useState(false)
  const [withSecurity, setWithSecurity] = useState(false)

  if (!apt) return <div className="pt-24 text-center text-white/60">Apartment not found</div>

  const related = apartments.filter((a) => a.type === apt.type && a.slug !== apt.slug).slice(0, 3)

  return (
    <>
      <section className="pt-20 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/apartments" className="text-[#F8AC28] hover:text-[#F8AC28]-light text-sm">&larr; Back to Apartments</Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden h-80 sm:h-96"><img src={apt.image} alt={apt.name} className="w-full h-full object-cover" /></div>
            <div>
              <div className="inline-block bg-[#F8AC28]/20 text-[#F8AC28] text-sm px-3 py-1 rounded mb-3">{apt.type}</div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{apt.name}</h1>
              <p className="text-white/50 mb-4">{apt.location}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[{ label: 'Bedrooms', value: `${apt.beds}` }, { label: 'Bathrooms', value: `${apt.baths}` }, { label: 'Size', value: `${apt.size} sqm` }].map((s) => (
                  <div key={s.label} className="bg-[#0e1117] border border-[#2a2d33] rounded-lg p-3"><p className="text-white/50 text-xs">{s.label}</p><p className="font-semibold">{s.value}</p></div>
                ))}
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Amenities</h3>
                <div className="flex flex-wrap gap-2">{apt.amenities.map((am) => <span key={am} className="bg-[#1a1d23] text-white/70 text-xs px-3 py-1 rounded">{am}</span>)}</div>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">{apt.description}</p>
              <div className="text-2xl text-[#F8AC28] font-bold mb-4">{apt.price}</div>
              <label className="flex items-center gap-3 mb-6 text-sm">
                <input type="checkbox" checked={withSecurity} onChange={(e) => setWithSecurity(e.target.checked)} className="accent-[#F8AC28] w-4 h-4" />
                <span>With Security</span>
              </label>
              <button onClick={() => setShowBooking(true)} className="w-full bg-[#F8AC28] text-[#0a0e13] py-3 rounded font-semibold hover:bg-[#e69d1f] transition-colors">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#0e1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Similar <span className="text-[#F8AC28]">Apartments</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/apartments/${r.slug}`} className="group bg-[#0a0e13] border border-[#2a2d33] rounded-xl overflow-hidden hover:border-[#F8AC28]/30 transition-all">
                  <div className="h-40 overflow-hidden"><img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                  <div className="p-4"><h3 className="font-semibold group-hover:text-[#F8AC28]">{r.name}</h3><p className="text-[#F8AC28] font-bold text-sm mt-1">{r.price}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {showBooking && <BookingForm serviceType="apartment" itemId={apt.slug} itemName={apt.name} onClose={() => setShowBooking(false)} />}
    </>
  )
}