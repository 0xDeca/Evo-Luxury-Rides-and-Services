export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0e13] px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-[#F8AC28] mb-4">404</p>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-white/60 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <a href="/" className="inline-block bg-[#F8AC28] text-[#0a0e13] px-8 py-3 rounded font-semibold hover:bg-[#e69d1f] transition-colors">Back to Home</a>
      </div>
    </div>
  )
}