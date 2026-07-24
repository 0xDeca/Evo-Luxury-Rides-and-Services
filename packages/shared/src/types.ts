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

export interface BlogPost {
  id: string
  created_at: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  category: string
  published_at: string
}

export interface Booking {
  id: string
  created_at: string
  name: string
  phone: string
  email: string
  service_type: 'car' | 'apartment'
  item_id: string
  item_name: string
  city: string
  with_driver: boolean
  with_security: boolean
  message: string
}

export type Database = {
  public: {
    Tables: {
      cars: { Row: Car; Insert: Omit<Car, 'id' | 'created_at'>; Update: Partial<Omit<Car, 'id'>> }
      apartments: { Row: Apartment; Insert: Omit<Apartment, 'id' | 'created_at'>; Update: Partial<Omit<Apartment, 'id'>> }
      testimonials: { Row: Testimonial; Insert: Omit<Testimonial, 'id' | 'created_at'>; Update: Partial<Omit<Testimonial, 'id'>> }
      settings: { Row: Setting; Insert: Omit<Setting, 'id'>; Update: Partial<Omit<Setting, 'id'>> }
      blog_posts: { Row: BlogPost; Insert: Omit<BlogPost, 'id' | 'created_at'>; Update: Partial<Omit<BlogPost, 'id'>> }
      bookings: { Row: Booking; Insert: Omit<Booking, 'id' | 'created_at'>; Update: Partial<Omit<Booking, 'id'>> }
    }
  }
}