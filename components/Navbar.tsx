'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/cars', label: 'Cars' },
  { href: '/apartments', label: 'Apartments' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto">
      <div className="bg-[#fafafa] rounded-[32px] border border-[rgba(150,153,156,0.12)] shadow-sm">
        <div className="flex items-center justify-between px-5 sm:px-10 h-14">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-lg font-bold tracking-wider text-[#0a0e13]">EKO</span>
            <span className="text-[11px] text-[#84878b] hidden sm:inline ml-1">Luxury Rides</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-[#4f5154] hover:text-[#0a0e13] transition-colors duration-200">
                {l.label}
              </Link>
            ))}
            <Link href="/cars" className="bg-[#0a0e13] text-white px-6 py-2 rounded-[32px] text-sm font-medium hover:bg-[#1a1d23] transition-colors duration-200">
              Book Now
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[#0a0e13] p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-2 bg-[#fafafa] rounded-2xl border border-[rgba(150,153,156,0.12)] shadow-sm overflow-hidden">
          <div className="px-5 py-3 space-y-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[#4f5154] hover:text-[#0a0e13] py-2 text-sm transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/cars" onClick={() => setOpen(false)} className="block text-center bg-[#0a0e13] text-white px-4 py-2.5 rounded-[32px] text-sm font-medium mt-2">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}