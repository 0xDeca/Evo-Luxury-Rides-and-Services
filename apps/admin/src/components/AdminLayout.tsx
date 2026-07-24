'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const nav = [
  { href: '/', label: 'Dashboard', icon: '📊' },
  { href: '/cars', label: 'Cars', icon: '🚗' },
  { href: '/apartments', label: 'Apartments', icon: '🏢' },
  { href: '/testimonials', label: 'Testimonials', icon: '⭐' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-luxury-900 flex">
      <aside className="w-60 bg-luxury-800 border-r border-luxury-700 flex flex-col">
        <div className="p-5 border-b border-luxury-700">
          <Link href="/" className="text-xl font-bold">
            <span className="text-luxury-gold">EKO</span>{' '}
            <span className="text-white/80 text-sm">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((n) => {
            const active = pathname === n.href || (n.href !== '/' && pathname.startsWith(n.href))
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${active ? 'bg-luxury-gold/20 text-luxury-gold' : 'text-white/60 hover:bg-luxury-700 hover:text-white'}`}
              >
                <span>{n.icon}</span>
                <span>{n.label}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-3 border-t border-luxury-700">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm text-white/60 hover:bg-luxury-700 hover:text-white transition-colors">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}