'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Apartment { id: string; name: string; slug: string; image: string; type: string; beds: number; baths: number; size_sqm: number; amenities: string[]; price: string; description: string; has_security_option: boolean; available: boolean }

const emptyForm: Apartment = { id: '', name: '', slug: '', image: '', type: '1-bed', beds: 1, baths: 1, size_sqm: 50, amenities: [], price: '', description: '', has_security_option: true, available: true }

export default function AdminApartmentsPage() {
  const [apartments, setApartments] = useState<Apartment[]>([])
  const [form, setForm] = useState<Apartment>(emptyForm)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(false)
  const [amenitiesInput, setAmenitiesInput] = useState('')

  useEffect(() => { load() }, [])
  const load = async () => { const { data } = await supabase.from('apartments').select('*').order('created_at', { ascending: false }); if (data) setApartments(data) }

  const handleSave = async () => {
    const payload = { name: form.name, slug: form.slug, image: form.image, type: form.type, beds: form.beds, baths: form.baths, size_sqm: form.size_sqm, amenities: form.amenities, price: form.price, description: form.description, has_security_option: form.has_security_option, available: form.available }
    if (editing) { await supabase.from('apartments').update(payload).eq('id', form.id) }
    else { await supabase.from('apartments').insert(payload) }
    setShowForm(false); setEditing(false); setForm(emptyForm); setAmenitiesInput(''); load()
  }

  const handleEdit = (a: Apartment) => { setForm(a); setEditing(true); setAmenitiesInput(a.amenities.join(', ')); setShowForm(true) }
  const handleDelete = async (id: string) => { if (confirm('Delete this apartment?')) { await supabase.from('apartments').delete().eq('id', id); load() } }
  const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Apartments</h1>
        <button onClick={() => { setForm(emptyForm); setEditing(false); setShowForm(true) }} className="bg-[#F8AC28] text-[#0a0e13] px-4 py-2 rounded font-semibold hover:bg-[#e69d1f] transition-colors">+ Add Apartment</button>
      </div>
      <div className="bg-[#0e1117] border border-[#2a2d33] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="bg-[#1a1d23] text-white/70"><th className="text-left p-3">Name</th><th className="text-left p-3">Type</th><th className="text-left p-3">Price</th><th className="text-left p-3">Available</th><th className="text-right p-3">Actions</th></tr></thead>
          <tbody>{apartments.map((a) => (
            <tr key={a.id} className="border-t border-[#2a2d33]"><td className="p-3 font-medium">{a.name}</td><td className="p-3"><span className="bg-[#F8AC28]/20 text-[#F8AC28] text-xs px-2 py-0.5 rounded">{a.type}</span></td><td className="p-3 text-white/70">{a.price}</td><td className="p-3">{a.available ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}</td><td className="p-3 text-right"><button onClick={() => handleEdit(a)} className="text-[#F8AC28] hover:text-[#F8AC28]-light mr-3">Edit</button><button onClick={() => handleDelete(a.id)} className="text-red-400 hover:text-red-300">Delete</button></td></tr>
          ))}</tbody>
        </table>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-[#0e1117] border border-[#2a2d33] rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit Apartment' : 'Add Apartment'}</h2><button onClick={() => setShowForm(false)} className="text-white/60 hover:text-white text-2xl">&times;</button></div>
            <div className="space-y-3">
              <div><label className="block text-xs text-white/70 mb-1">Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value, slug: editing ? form.slug : slugify(e.target.value) })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Slug</label><input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Image URL</label><input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Type</label><select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm"><option value="studio">Studio</option><option value="1-bed">1-Bed</option><option value="2-bed">2-Bed</option><option value="3-bed">3-Bed</option></select></div>
              <div className="grid grid-cols-3 gap-3">
                <div><label className="block text-xs text-white/70 mb-1">Beds</label><input type="number" value={form.beds} onChange={(e) => setForm({ ...form, beds: Number(e.target.value) })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
                <div><label className="block text-xs text-white/70 mb-1">Baths</label><input type="number" value={form.baths} onChange={(e) => setForm({ ...form, baths: Number(e.target.value) })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
                <div><label className="block text-xs text-white/70 mb-1">Size (sqm)</label><input type="number" value={form.size_sqm} onChange={(e) => setForm({ ...form, size_sqm: Number(e.target.value) })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
              </div>
              <div><label className="block text-xs text-white/70 mb-1">Amenities (comma separated)</label><input value={amenitiesInput} onChange={(e) => { setAmenitiesInput(e.target.value); setForm({ ...form, amenities: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) }) }} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Price</label><input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Description</label><textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2 text-white text-sm" /></div>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.has_security_option} onChange={(e) => setForm({ ...form, has_security_option: e.target.checked })} className="accent-[#F8AC28]" /> Has Security Option</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.available} onChange={(e) => setForm({ ...form, available: e.target.checked })} className="accent-[#F8AC28]" /> Available</label>
              <button onClick={handleSave} className="w-full bg-[#F8AC28] text-[#0a0e13] py-2.5 rounded font-semibold hover:bg-[#e69d1f] transition-colors mt-2">{editing ? 'Update Apartment' : 'Add Apartment'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}