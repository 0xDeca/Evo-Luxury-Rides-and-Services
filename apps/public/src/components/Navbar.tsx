'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/cars', label: 'Cars' },
  { href: '/apartments', label: 'Apartments' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-900/95 backdrop-blur-sm border-b border-luxury-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold text-luxury-gold">EKO</span>
            <span className="text-sm text-white/80 hidden sm:inline">Luxury Rides</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-luxury-gold transition-colors">
                {l.label}
              </Link>
            ))}
            <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="bg-luxury-gold text-luxury-900 px-4 py-2 rounded text-sm font-semibold hover:bg-luxury-gold-light transition-colors">
              WhatsApp
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-luxury-800 border-t border-luxury-700/50">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/70 hover:text-luxury-gold py-2 text-sm">
                {l.label}
              </Link>
            ))}
            <a href="https://wa.me/2348107837959" target="_blank" rel="noopener noreferrer" className="block text-center bg-luxury-gold text-luxury-900 px-4 py-2 rounded text-sm font-semibold mt-3">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}