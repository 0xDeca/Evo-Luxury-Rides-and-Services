export interface Car {
  id: string
  created_at: string
  name: string
  slug: string
  image: string
  images: string[]
  hp: number
  seats: number
  engine: string
  transmission: string
  price: string
  description: string
  category: string
  available: boolean
  has_driver_option: boolean
}

export interface Apartment {
  id: string
  created_at: string
  name: string
  slug: string
  image: string
  images: string[]
  type: 'studio' | '1-bed' | '2-bed' | '3-bed'
  beds: number
  baths: number
  size_sqm: number
  amenities: string[]
  price: string
  description: string
  available: boolean
  has_security_option: boolean
}

export interface Testimonial {
  id: string
  created_at: string
  name: string
  role: string
  quote: string
  rating: number
  image: string
}

export interface Setting {
  id: string
  key: string
  value: string
}