'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `New Contact - Eko Luxury\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    window.open(`https://wa.me/2348107837959?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      <section className="pt-24 pb-12 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact <span className="text-luxury-gold">Us</span></h1>
          <p className="text-white/60 max-w-xl mx-auto">Get in touch with us for bookings and inquiries</p>
        </div>
      </section>

      <section className="pb-20 bg-luxury-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-luxury-800 border border-luxury-700 rounded-xl p-6 space-y-4 mb-6">
              <div><p className="text-white/50 text-sm">Address</p><p className="font-semibold">254 Agege Motor Rd, Poatson House by Airport Exit, National Bus/stop Ikeja, Ikeja, Lagos 102214</p></div>
              <div><p className="text-white/50 text-sm">Phone</p><p className="font-semibold text-luxury-gold">0810 783 7959</p></div>
              <div><p className="text-white/50 text-sm">Hours</p><p className="font-semibold">Open 24 hours</p></div>
              <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="inline-block bg-luxury-gold text-luxury-900 px-6 py-2 rounded font-semibold hover:bg-luxury-gold-light transition-colors">Chat on WhatsApp</a>
            </div>
            <div className="rounded-xl overflow-hidden h-64 border border-luxury-700">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3522531!3d6.5333072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d17b996483f%3A0x6a0dc2a39fb9497f!2sEko%20Luxury%20Rides%20and%20Service%20Apartments!5e0!3m2!1sen!2sng!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-luxury-800 border border-luxury-700 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold mb-4">Send us a <span className="text-luxury-gold">Message</span></h2>
            <div><label className="block text-sm text-white/70 mb-1">Full Name *</label><input required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" /></div>
            <div><label className="block text-sm text-white/70 mb-1">Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" /></div>
            <div><label className="block text-sm text-white/70 mb-1">Phone *</label><input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" /></div>
            <div><label className="block text-sm text-white/70 mb-1">Message *</label><textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-luxury-900 border border-luxury-600 rounded px-3 py-2 text-white focus:outline-none focus:border-luxury-gold" /></div>
            <button type="submit" className="w-full bg-luxury-gold text-luxury-900 py-3 rounded font-semibold hover:bg-luxury-gold-light transition-colors">Send via WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  )
}