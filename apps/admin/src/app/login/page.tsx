'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
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
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-luxury-900 flex items-center justify-center px-4">
      <div className="bg-luxury-800 border border-luxury-700 rounded-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-2xl font-bold"><span className="text-luxury-gold">EKO</span> <span className="text-white/80">Admin</span></p>
          <p className="text-white/50 text-sm mt-1">Sign in to manage your site</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2.5 text-white focus:outline-none focus:border-luxury-gold" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Password</label>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2.5 text-white focus:outline-none focus:border-luxury-gold" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-luxury-gold text-luxury-900 py-2.5 rounded font-semibold hover:bg-luxury-gold-light transition-colors disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}