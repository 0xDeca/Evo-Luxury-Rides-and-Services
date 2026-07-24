import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-900 px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-luxury-gold mb-4">404</p>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-white/60 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="inline-block bg-luxury-gold text-luxury-900 px-8 py-3 rounded font-semibold hover:bg-luxury-gold-light transition-colors">Back to Home</Link>
      </div>
    </div>
  )
}