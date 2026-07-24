'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ cars: 0, apartments: 0, testimonials: 0, bookings: 0 })

  useEffect(() => {
    Promise.all([
      supabase.from('cars').select('*', { count: 'exact', head: true }),
      supabase.from('apartments').select('*', { count: 'exact', head: true }),
      supabase.from('testimonials').select('*', { count: 'exact', head: true }),
      supabase.from('bookings').select('*', { count: 'exact', head: true }),
    ]).then(([cars, apts, tests, books]) => {
      setStats({
        cars: cars.count ?? 0,
        apartments: apts.count ?? 0,
        testimonials: tests.count ?? 0,
        bookings: books.count ?? 0,
      })
    })
  }, [])

  const cards = [
    { label: 'Total Cars', value: stats.cars, href: '/admin/cars', color: 'border-luxury-gold' },
    { label: 'Total Apartments', value: stats.apartments, href: '/admin/apartments', color: 'border-blue-500' },
    { label: 'Testimonials', value: stats.testimonials, href: '/admin/testimonials', color: 'border-green-500' },
    { label: 'Bookings', value: stats.bookings, href: '#', color: 'border-purple-500' },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className={`bg-luxury-800 border border-luxury-700 border-t-4 ${c.color} rounded-xl p-5 hover:bg-luxury-700 transition-colors`}>
            <p className="text-white/60 text-sm">{c.label}</p>
            <p className="text-3xl font-bold mt-1">{c.value}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        <Link href="/admin/cars" className="bg-luxury-gold text-luxury-900 px-5 py-2.5 rounded font-semibold hover:bg-luxury-gold-light transition-colors">+ Add Car</Link>
        <Link href="/admin/apartments" className="bg-luxury-gold text-luxury-900 px-5 py-2.5 rounded font-semibold hover:bg-luxury-gold-light transition-colors">+ Add Apartment</Link>
      </div>
    </div>
  )
}