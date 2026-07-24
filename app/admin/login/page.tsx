'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) { setError(authError.message); setLoading(false); return }
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-[#0a0e13] flex items-center justify-center px-4">
      <div className="bg-[#0e1117] border border-[#2a2d33] rounded-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-2xl font-bold"><span className="text-[#F8AC28]">EKO</span> <span className="text-white/80">Admin</span></p>
          <p className="text-white/50 text-sm mt-1">Sign in to manage your site</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#F8AC28]" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Password</label>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#F8AC28]" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-[#F8AC28] text-[#0a0e13] py-2.5 rounded font-semibold hover:bg-[#e69d1f] transition-colors disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}