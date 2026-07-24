'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const nav = [
  { href: '/', label: 'Dashboard', icon: '📊' },
  { href: '/admin/cars', label: 'Cars', icon: '🚗' },
  { href: '/admin/apartments', label: 'Apartments', icon: '🏢' },
  { href: '/admin/testimonials', label: 'Testimonials', icon: '⭐' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#0a0e13] flex">
      <aside className="w-60 bg-[#0e1117] border-r border-[#2a2d33] flex flex-col">
        <div className="p-5 border-b border-[#2a2d33]">
          <Link href="/admin" className="text-xl font-bold">
            <span className="text-[#F8AC28]">EKO</span>{' '}
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
                className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${active ? 'bg-[#F8AC28]/20 text-[#F8AC28]' : 'text-white/60 hover:bg-[#1a1d23] hover:text-white'}`}
              >
                <span>{n.icon}</span>
                <span>{n.label}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-3 border-t border-[#2a2d33]">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm text-white/60 hover:bg-[#1a1d23] hover:text-white transition-colors">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}