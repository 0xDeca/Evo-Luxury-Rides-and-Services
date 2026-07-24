'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Testimonial { id: string; name: string; role: string; quote: string; rating: number; image: string }

const emptyForm: Testimonial = { id: '', name: '', role: '', quote: '', rating: 5, image: '' }

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [form, setForm] = useState<Testimonial>(emptyForm)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(false)

  useEffect(() => { load() }, [])
  const load = async () => { const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false }); if (data) setTestimonials(data) }

  const handleSave = async () => {
    const payload = { name: form.name, role: form.role, quote: form.quote, rating: form.rating, image: form.image }
    if (editing) { await supabase.from('testimonials').update(payload).eq('id', form.id) }
    else { await supabase.from('testimonials').insert(payload) }
    setShowForm(false); setEditing(false); setForm(emptyForm); load()
  }

  const handleEdit = (t: Testimonial) => { setForm(t); setEditing(true); setShowForm(true) }
  const handleDelete = async (id: string) => { if (confirm('Delete this testimonial?')) { await supabase.from('testimonials').delete().eq('id', id); load() } }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Testimonials</h1>
        <button onClick={() => { setForm(emptyForm); setEditing(false); setShowForm(true) }} className="bg-luxury-gold text-luxury-900 px-4 py-2 rounded font-semibold hover:bg-luxury-gold-light transition-colors">+ Add Testimonial</button>
      </div>
      <div className="bg-luxury-800 border border-luxury-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="bg-luxury-700 text-white/70"><th className="text-left p-3">Name</th><th className="text-left p-3">Quote</th><th className="text-left p-3">Rating</th><th className="text-right p-3">Actions</th></tr></thead>
          <tbody>{testimonials.map((t) => (
            <tr key={t.id} className="border-t border-luxury-700"><td className="p-3 font-medium">{t.name}</td><td className="p-3 text-white/70 max-w-xs truncate">{t.quote}</td><td className="p-3 text-luxury-gold">{'★'.repeat(t.rating)}</td><td className="p-3 text-right"><button onClick={() => handleEdit(t)} className="text-luxury-gold hover:text-luxury-gold-light mr-3">Edit</button><button onClick={() => handleDelete(t.id)} className="text-red-400 hover:text-red-300">Delete</button></td></tr>
          ))}</tbody>
        </table>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-luxury-800 border border-luxury-700 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit Testimonial' : 'Add Testimonial'}</h2><button onClick={() => setShowForm(false)} className="text-white/60 hover:text-white text-2xl">&times;</button></div>
            <div className="space-y-3">
              <div><label className="block text-xs text-white/70 mb-1">Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Role</label><input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Quote</label><textarea rows={3} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Rating (1-5)</label><select value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm">{[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} stars</option>)}</select></div>
              <div><label className="block text-xs text-white/70 mb-1">Image URL</label><input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <button onClick={handleSave} className="w-full bg-luxury-gold text-luxury-900 py-2.5 rounded font-semibold hover:bg-luxury-gold-light transition-colors mt-2">{editing ? 'Update Testimonial' : 'Add Testimonial'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}