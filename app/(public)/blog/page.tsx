import Link from 'next/link'

const blogPosts = [
  { slug: 'why-choose-luxury-car-rentals-nigeria', title: 'Why Choose Luxury Car Rentals in Nigeria', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', excerpt: 'Discover the benefits of renting luxury vehicles for your travel needs across Nigeria. From convenience to style, learn why luxury car rental is the smart choice.', author: 'Robert Fox', date: 'April 3, 2026', category: 'Luxury Cars' },
  { slug: 'top-service-apartments-lagos-business-trip', title: 'Top Service Apartments for Your Lagos Business Trip', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', excerpt: 'Find the perfect service apartment for your next business visit to Lagos. We review the best locations and amenities for corporate travelers.', author: 'Jane Cooper', date: 'April 5, 2026', category: 'Apartments' },
  { slug: 'complete-guide-renting-cars-abuja', title: 'A Complete Guide to Renting Cars in Abuja', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', excerpt: 'Everything you need to know about car rental services in Nigeria\'s capital city. Tips, requirements, and recommendations for a smooth experience.', author: 'Bessie Cooper', date: 'April 7, 2026', category: 'Guide' },
]

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Latest <span className="text-[#F8AC28]">Articles</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">Explore both stylish sports cars and comfortable apartment stays</p>
        </div>
      </section>

      <section className="pb-20 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-[#0e1117] border border-[#2a2d33] rounded-xl overflow-hidden hover:border-[#F8AC28]/30 transition-all">
                <div className="h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-white/50 mb-2">
                    <span>{p.date}</span><span>•</span><span>{p.author}</span>
                  </div>
                  <span className="inline-block bg-[#F8AC28]/20 text-[#F8AC28] text-xs px-2 py-0.5 rounded mb-2">{p.category}</span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#F8AC28] transition-colors">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.excerpt}</p>
                  <span className="text-[#F8AC28] text-sm font-semibold mt-3 inline-block group-hover:translate-x-1 transition-transform">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}