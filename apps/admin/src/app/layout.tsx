import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AdminAuthWrapper from '@/components/AdminAuthWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin - Eko Luxury',
  description: 'Admin dashboard for Eko Luxury Rides and Service Apartments',
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminAuthWrapper>{children}</AdminAuthWrapper>
      </body>
    </html>
  )
}