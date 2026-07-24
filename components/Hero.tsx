import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0e13]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F8AC28]/6 via-transparent to-transparent" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-[#f2f2f2]">
          The Largest{' '}
          <span className="text-[#F8AC28]">Luxury Car</span>{' '}
          Rental Marketplace
        </h1>
        <p className="text-[#84878b] text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore an exclusive collection of high-performance and luxury vehicles, curated for unforgettable drives. Premium service apartments also available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/cars" className="bg-[#F8AC28] text-[#0a0e13] px-8 py-3.5 rounded-[32px] font-semibold text-lg hover:bg-[#e69d1f] transition-colors duration-200">
            Start Your Journey
          </Link>
          <Link href="/about" className="border border-[#2a2d33] text-[#f2f2f2] px-8 py-3.5 rounded-[32px] font-semibold text-lg hover:bg-[#1a1d23] transition-colors duration-200">
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['20+', 'Luxury Vehicles'],
            ['12+', 'Premium Apartments'],
            ['Nationwide', 'Coverage'],
            ['24/7', 'Support'],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="text-[#F8AC28] text-xl sm:text-2xl font-bold">{n}</p>
              <p className="text-[#5c5f64] text-xs sm:text-sm">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}