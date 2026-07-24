import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-900 via-luxury-800 to-luxury-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/8 via-transparent to-transparent" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          The Largest{' '}
          <span className="text-luxury-gold">Luxury Car</span>{' '}
          Rental Marketplace
        </h1>
        <p className="text-white/50 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore an exclusive collection of high-performance and luxury vehicles, curated for unforgettable drives. Premium service apartments also available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/cars" className="bg-luxury-gold text-luxury-900 px-8 py-3.5 rounded font-semibold text-lg hover:bg-luxury-gold-light transition-colors">
            Start Your Journey
          </Link>
          <Link href="/about" className="border border-white/20 text-white/80 px-8 py-3.5 rounded font-semibold text-lg hover:border-white/40 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[['20+', 'Luxury Vehicles'], ['12+', 'Premium Apartments'], ['Nationwide', 'Coverage'], ['24/7', 'Support']].map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="text-luxury-gold text-xl sm:text-2xl font-bold">{n}</p>
              <p className="text-white/40 text-xs sm:text-sm">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}