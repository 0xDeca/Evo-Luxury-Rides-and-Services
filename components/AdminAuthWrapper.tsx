'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import AdminLayout from './AdminLayout'

export default function AdminAuthWrapper({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthed(!!session)
      if (!session && pathname !== '/login') router.push('/login')
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(!!session)
      if (!session && pathname !== '/login') router.push('/login')
    })
    return () => subscription.unsubscribe()
  }, [pathname, router])

  if (authed === null) return <div className="min-h-screen bg-luxury-900 flex items-center justify-center"><p className="text-white/60">Loading...</p></div>

  if (pathname === '/login') return <>{children}</>
  if (!authed) return null

  return <AdminLayout>{children}</AdminLayout>
}