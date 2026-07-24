'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

const posts = [
  {
    slug: 'why-choose-luxury-car-rentals-nigeria',
    title: 'Why Choose Luxury Car Rentals in Nigeria',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
    content: `
Luxury car rentals are becoming increasingly popular in Nigeria, and for good reason. Whether you're a business executive visiting Lagos, a tourist exploring Abuja, or a local looking to make a statement, renting a luxury vehicle offers numerous advantages.

## The Convenience Factor

One of the primary benefits of luxury car rental is the convenience it offers. Instead of dealing with the hassles of car ownership — maintenance, insurance, depreciation — you simply pick up the car when you need it and return it when you're done. This is particularly valuable for business travelers who need reliable transportation without long-term commitment.

## Making the Right Impression

In the business world, appearance matters. Arriving at a meeting in a Mercedes-Benz S-Class or a Range Rover sends a powerful message about your professionalism and success. Luxury car rental allows you to present yourself in the best light without the substantial investment of purchasing these vehicles.

## Access to Premium Vehicles

Car rental services give you access to a diverse fleet of premium vehicles that would otherwise be out of reach. From sports cars like the Bugatti Chiron to executive sedans like the Rolls-Royce Phantom, you can choose the perfect vehicle for any occasion.

## Professional Chauffeur Services

Many luxury car rental companies in Nigeria offer professional chauffeur services. This means you can focus on your work or enjoy your journey while an experienced driver navigates Lagos traffic or Abuja roads. It's the ultimate in convenience and luxury.

## Cost-Effective Luxury

While it may seem counterintuitive, renting luxury cars can be more cost-effective than owning them, especially if you only need a premium vehicle occasionally. You avoid the high purchase price, insurance costs, and depreciation that come with luxury car ownership.

## Why Choose Eko Luxury Rides?

At Eko Luxury Rides, we pride ourselves on offering the finest selection of luxury vehicles in Nigeria. Our fleet is meticulously maintained, our chauffeurs are professionally trained, and our booking process is seamless. Whether you need a car for a day, a week, or a month, we have the perfect vehicle for you.

Experience the difference that true luxury makes. Contact us today to book your dream car.`,
    author: 'Robert Fox',
    date: 'April 3, 2026',
    category: 'Luxury Cars',
  },
  {
    slug: 'top-service-apartments-lagos-business-trip',
    title: 'Top Service Apartments for Your Lagos Business Trip',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    content: `
Lagos is Nigeria's commercial hub, attracting business travelers from across the globe. Finding the right accommodation is crucial for a productive and comfortable trip. Service apartments offer the perfect blend of hotel convenience and home comfort.

## Why Choose Service Apartments?

Unlike traditional hotels, service apartments provide more space, privacy, and flexibility. They come fully furnished with kitchens, living areas, and often multiple bedrooms — ideal for extended stays or traveling with colleagues.

## Top Locations in Lagos

### Victoria Island
The premier business district of Lagos, Victoria Island offers easy access to corporate headquarters, banks, and upscale restaurants. Our 1-bedroom executive apartments here provide the perfect base for business travelers.

### Ikeja
As the capital of Lagos State, Ikeja is home to many government offices and businesses. Our studio and 2-bedroom apartments in Ikeja offer comfort and convenience at competitive rates.

### Lekki
For those who prefer a more relaxed environment, Lekki offers modern apartments with resort-style amenities. Our 3-bedroom luxury apartments here are perfect for longer stays.

## Essential Amenities

When choosing a service apartment, look for these essential amenities:
- Reliable electricity (generator backup)
- High-speed WiFi
- 24/7 security
- Air conditioning
- Fully equipped kitchen
- Parking space

## Business-Friendly Features

Our service apartments are designed with business travelers in mind:
- Dedicated workspace areas
- Meeting room access
- Quick check-in and check-out
- Laundry services
- Airport transfers available

## Book Your Stay

At Eko Luxury Rides and Service Apartments, we offer premium accommodation across Lagos, Abuja, and other major Nigerian cities. Contact us today to find the perfect apartment for your business trip.`,
    author: 'Jane Cooper',
    date: 'April 5, 2026',
    category: 'Apartments',
  },
  {
    slug: 'complete-guide-renting-cars-abuja',
    title: 'A Complete Guide to Renting Cars in Abuja',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    content: `
Abuja, Nigeria's capital city, is known for its beautiful architecture, wide roads, and organized layout. Renting a car in Abuja is straightforward, but there are several things you should know to ensure a smooth experience.

## Requirements for Renting

To rent a luxury car in Abuja, you typically need:
- A valid driver's license (international or Nigerian)
- Proof of identity (passport or national ID)
- Security deposit (varies by vehicle)
- Minimum age of 25 years (may vary by company)

## Choosing the Right Vehicle

Consider your needs when selecting a vehicle:
- **Business meetings**: Mercedes-Benz S-Class or BMW 7-Series
- **Leisure travel**: Range Rover or Lexus LX
- **Special occasions**: Rolls-Royce Phantom or Bentley Flying Spur
- **Group travel**: Toyota Hiace or Mercedes Sprinter

## Understanding the Costs

Car rental prices in Abuja vary based on:
- Vehicle type and model
- Rental duration (daily, weekly, monthly)
- With or without driver
- Season and availability

At Eko Luxury Rides, we offer transparent pricing with no hidden fees. Our rates include insurance and maintenance.

## With Driver vs Self-Drive

Many luxury car rental companies in Abuja offer both options:
- **With driver**: Perfect for those unfamiliar with Abuja's roads or who want to focus on work
- **Self-drive**: Ideal for those who prefer independence and know their way around

## Tips for a Great Experience

1. Book in advance, especially during peak seasons
2. Inspect the vehicle before accepting
3. Understand the insurance coverage
4. Check fuel policy
5. Know the mileage limits

## Why Choose Eko Luxury Rides

We offer the finest luxury vehicles in Abuja with professional service. Our fleet includes the latest models, all meticulously maintained. Whether you need a car for a day or a month, we have the perfect vehicle for you.

Contact us today to book your luxury car in Abuja.`,
    author: 'Bessie Cooper',
    date: 'April 7, 2026',
    category: 'Guide',
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) return <div className="pt-24 text-center text-white/60">Post not found</div>

  return (
    <>
      <section className="pt-24 pb-12 bg-[#0a0e13]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-[#F8AC28] hover:text-[#F8AC28]-light text-sm">&larr; Back to Blog</Link>
        </div>
      </section>

      <article className="pb-20 bg-[#0a0e13]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden h-64 sm:h-80 mb-8"><img src={post.image} alt={post.title} className="w-full h-full object-cover" /></div>
          <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
            <span>{post.date}</span><span>•</span><span>{post.author}</span><span>•</span><span className="text-[#F8AC28]">{post.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">{post.title}</h1>
          <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed whitespace-pre-line">{post.content}</div>
        </div>
      </article>
    </>
  )
}