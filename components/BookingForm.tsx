'use client'

import { useState } from 'react'
import { NIGERIAN_CITIES } from '@/lib/constants'

interface BookingFormProps {
  serviceType: 'car' | 'apartment'
  itemId: string
  itemName: string
  onClose: () => void
}

export default function BookingForm({ serviceType, itemId, itemName, onClose }: BookingFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [withDriver, setWithDriver] = useState(false)
  const [withSecurity, setWithSecurity] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `New Booking - Eko Luxury

Service: ${serviceType === 'car' ? 'Car Rental' : 'Service Apartment'}
Item: ${itemName}
Name: ${name}
Phone: ${phone}
Email: ${email}
City: ${city}
${serviceType === 'car' ? `Driver: ${withDriver ? 'Yes' : 'No'}` : `Security: ${withSecurity ? 'Yes' : 'No'}`}
Message: ${message}`
    window.open(`https://wa.me/2348107837959?text=${encodeURIComponent(text)}`, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="bg-luxury-800 rounded-xl border border-luxury-600 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-luxury-700">
          <h2 className="text-lg font-semibold text-white">Book {itemName}</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white text-2xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Full Name *</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Phone *</label>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">City *</label>
            <select required value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold">
              <option value="">Select city</option>
              {NIGERIAN_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          {serviceType === 'car' && (
            <label className="flex items-center gap-3 text-sm text-white/80">
              <input type="checkbox" checked={withDriver} onChange={(e) => setWithDriver(e.target.checked)} className="accent-luxury-gold w-4 h-4" />
              With Driver
            </label>
          )}
          {serviceType === 'apartment' && (
            <label className="flex items-center gap-3 text-sm text-white/80">
              <input type="checkbox" checked={withSecurity} onChange={(e) => setWithSecurity(e.target.checked)} className="accent-luxury-gold w-4 h-4" />
              With Security
            </label>
          )}
          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" />
          </div>
          <button type="submit" className="w-full bg-luxury-gold text-luxury-900 py-3 rounded font-semibold hover:bg-luxury-gold-light transition-colors">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}