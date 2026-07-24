'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `New Booking Inquiry - Eko Luxury\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    window.open(`https://wa.me/2348107837959?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[#0a0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s Make Your <span className="text-[#F8AC28]">Booking</span> Seamless
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">Our team is ready to assist with reservations, pricing, and premium service inquiries.</p>
        </div>
      </section>

      <section className="pb-20 bg-[#0a0e13]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-[#0e1117] border border-[#2a2d33] rounded-xl p-6">
              <p className="text-white/50 text-sm mb-1">Phone / WhatsApp</p>
              <a href="https://wa.me/2348107837959" className="text-[#F8AC28] text-lg font-semibold hover:text-[#F8AC28]-light transition-colors">0810 783 7959</a>
              <p className="text-white/40 text-xs mt-1">Available 24 hours</p>
            </div>
            <div className="bg-[#0e1117] border border-[#2a2d33] rounded-xl p-6">
              <p className="text-white/50 text-sm mb-1">Email</p>
              <p className="text-white font-semibold">info@ekoluxuryrides.com</p>
              <p className="text-white/40 text-xs mt-1">Response within 24 hours</p>
            </div>
            <div className="bg-[#0e1117] border border-[#2a2d33] rounded-xl p-6">
              <p className="text-white/50 text-sm mb-1">Address</p>
              <p className="text-white font-semibold">254 Agege Motor Rd, Ikeja, Lagos 102214</p>
              <p className="text-white/40 text-xs mt-1">By appointment only</p>
            </div>
            <div className="rounded-xl overflow-hidden h-56 border border-[#2a2d33]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3522531!3d6.5333072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d17b996483f%3A0x6a0dc2a39fb9497f!2sEko%20Luxury%20Rides%20and%20Service%20Apartments!5e0!3m2!1sen!2sng!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0e1117] border border-[#2a2d33] rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold mb-2">Send us a <span className="text-[#F8AC28]">Message</span></h2>
            <p className="text-white/50 text-sm mb-4">Fill in the form and we&apos;ll get back to you on WhatsApp.</p>
            <div>
              <label className="block text-sm text-white/60 mb-1">Full Name *</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#F8AC28] text-sm" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#F8AC28] text-sm" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Phone *</label>
              <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#F8AC28] text-sm" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Message *</label>
              <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-[#0a0e13] border border-[#2a2d33] rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#F8AC28] text-sm" />
            </div>
            <button type="submit" className="w-full bg-[#F8AC28] text-[#0a0e13] py-3 rounded font-semibold hover:bg-[#e69d1f] transition-colors">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  )
}