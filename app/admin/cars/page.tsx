'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Car { id: string; name: string; slug: string; image: string; hp: number; seats: number; engine: string; transmission: string; price: string; category: string; description: string; has_driver_option: boolean; available: boolean }

const emptyForm: Car = { id: '', name: '', slug: '', image: '', hp: 0, seats: 4, engine: '', transmission: 'Auto', price: '', category: 'Luxury', description: '', has_driver_option: true, available: true }

export default function AdminCarsPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [form, setForm] = useState<Car>(emptyForm)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(false)

  useEffect(() => { load() }, [])
  const load = async () => { const { data } = await supabase.from('cars').select('*').order('created_at', { ascending: false }); if (data) setCars(data) }

  const handleSave = async () => {
    if (editing) {
      await supabase.from('cars').update({ name: form.name, slug: form.slug, image: form.image, hp: form.hp, seats: form.seats, engine: form.engine, transmission: form.transmission, price: form.price, category: form.category, description: form.description, has_driver_option: form.has_driver_option, available: form.available }).eq('id', form.id)
    } else {
      await supabase.from('cars').insert({ name: form.name, slug: form.slug, image: form.image, hp: form.hp, seats: form.seats, engine: form.engine, transmission: form.transmission, price: form.price, category: form.category, description: form.description, has_driver_option: form.has_driver_option, available: form.available })
    }
    setShowForm(false); setEditing(false); setForm(emptyForm); load()
  }

  const handleEdit = (car: Car) => { setForm(car); setEditing(true); setShowForm(true) }
  const handleDelete = async (id: string) => { if (confirm('Delete this car?')) { await supabase.from('cars').delete().eq('id', id); load() } }
  const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Cars</h1>
        <button onClick={() => { setForm(emptyForm); setEditing(false); setShowForm(true) }} className="bg-luxury-gold text-luxury-900 px-4 py-2 rounded font-semibold hover:bg-luxury-gold-light transition-colors">+ Add Car</button>
      </div>
      <div className="bg-luxury-800 border border-luxury-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="bg-luxury-700 text-white/70"><th className="text-left p-3">Name</th><th className="text-left p-3">Price</th><th className="text-left p-3">Category</th><th className="text-left p-3">Available</th><th className="text-right p-3">Actions</th></tr></thead>
          <tbody>{cars.map((car) => (
            <tr key={car.id} className="border-t border-luxury-700"><td className="p-3 font-medium">{car.name}</td><td className="p-3 text-white/70">{car.price}</td><td className="p-3"><span className="bg-luxury-gold/20 text-luxury-gold text-xs px-2 py-0.5 rounded">{car.category}</span></td><td className="p-3">{car.available ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}</td><td className="p-3 text-right"><button onClick={() => handleEdit(car)} className="text-luxury-gold hover:text-luxury-gold-light mr-3">Edit</button><button onClick={() => handleDelete(car.id)} className="text-red-400 hover:text-red-300">Delete</button></td></tr>
          ))}</tbody>
        </table>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-luxury-800 border border-luxury-700 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit Car' : 'Add Car'}</h2><button onClick={() => setShowForm(false)} className="text-white/60 hover:text-white text-2xl">&times;</button></div>
            <div className="space-y-3">
              <div><label className="block text-xs text-white/70 mb-1">Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value, slug: editing ? form.slug : slugify(e.target.value) })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Slug</label><input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Image URL</label><input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs text-white/70 mb-1">HP</label><input type="number" value={form.hp} onChange={(e) => setForm({ ...form, hp: Number(e.target.value) })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
                <div><label className="block text-xs text-white/70 mb-1">Seats</label><input type="number" value={form.seats} onChange={(e) => setForm({ ...form, seats: Number(e.target.value) })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              </div>
              <div><label className="block text-xs text-white/70 mb-1">Engine</label><input value={form.engine} onChange={(e) => setForm({ ...form, engine: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs text-white/70 mb-1">Transmission</label><select value={form.transmission} onChange={(e) => setForm({ ...form, transmission: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm"><option>Auto</option><option>Manual</option></select></div>
                <div><label className="block text-xs text-white/70 mb-1">Category</label><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm"><option>Luxury</option><option>Sports</option><option>Electric</option><option>SUVs</option></select></div>
              </div>
              <div><label className="block text-xs text-white/70 mb-1">Price</label><input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <div><label className="block text-xs text-white/70 mb-1">Description</label><textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white text-sm" /></div>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.has_driver_option} onChange={(e) => setForm({ ...form, has_driver_option: e.target.checked })} className="accent-luxury-gold" /> Has Driver Option</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.available} onChange={(e) => setForm({ ...form, available: e.target.checked })} className="accent-luxury-gold" /> Available</label>
              <button onClick={handleSave} className="w-full bg-luxury-gold text-luxury-900 py-2.5 rounded font-semibold hover:bg-luxury-gold-light transition-colors mt-2">{editing ? 'Update Car' : 'Add Car'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}