'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminSettingsPage() {
  const [whatsapp, setWhatsapp] = useState('')
  const [address, setAddress] = useState('')
  const [hours, setHours] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    supabase.from('settings').select('*').then(({ data }) => {
      if (data) {
        data.forEach((s: { key: string; value: string }) => {
          if (s.key === 'whatsapp_number') setWhatsapp(s.value)
          if (s.key === 'business_address') setAddress(s.value)
          if (s.key === 'business_hours') setHours(s.value)
        })
      }
    })
  }, [])

  const handleSave = async () => {
    setSaving(true)
    const settings = [
      { key: 'whatsapp_number', value: whatsapp },
      { key: 'business_address', value: address },
      { key: 'business_hours', value: hours },
    ]
    for (const s of settings) {
      await supabase.from('settings').upsert(s, { onConflict: 'key' })
    }
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-luxury-800 border border-luxury-700 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">WhatsApp Number</label>
          <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2.5 text-white focus:outline-none focus:border-luxury-gold" placeholder="e.g. 08107837959" />
          <p className="text-xs text-white/40 mt-1">This number is used for all booking WhatsApp links</p>
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Business Address</label>
          <textarea rows={3} value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2.5 text-white focus:outline-none focus:border-luxury-gold" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Business Hours</label>
          <input value={hours} onChange={(e) => setHours(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2.5 text-white focus:outline-none focus:border-luxury-gold" placeholder="e.g. Open 24 hours" />
        </div>
        <button onClick={handleSave} disabled={saving} className="bg-luxury-gold text-luxury-900 px-6 py-2.5 rounded font-semibold hover:bg-luxury-gold-light transition-colors disabled:opacity-50">
          {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Settings'}
        </button>
      </div>
    </div>
  )
}