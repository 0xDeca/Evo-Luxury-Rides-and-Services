-- Eko Luxury Rides and Service Apartments - Database Schema

-- Cars table
CREATE TABLE IF NOT EXISTS cars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  image TEXT NOT NULL DEFAULT '',
  images TEXT[] DEFAULT '{}',
  hp INTEGER DEFAULT 0,
  seats INTEGER DEFAULT 4,
  engine TEXT DEFAULT '',
  transmission TEXT DEFAULT '',
  price TEXT DEFAULT '',
  description TEXT DEFAULT '',
  category TEXT DEFAULT '',
  available BOOLEAN DEFAULT true,
  has_driver_option BOOLEAN DEFAULT true
);

-- Apartments table
CREATE TABLE IF NOT EXISTS apartments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  image TEXT NOT NULL DEFAULT '',
  images TEXT[] DEFAULT '{}',
  type TEXT NOT NULL CHECK (type IN ('studio', '1-bed', '2-bed', '3-bed')),
  beds INTEGER DEFAULT 1,
  baths INTEGER DEFAULT 1,
  size_sqm INTEGER DEFAULT 0,
  amenities TEXT[] DEFAULT '{}',
  price TEXT DEFAULT '',
  description TEXT DEFAULT '',
  available BOOLEAN DEFAULT true,
  has_security_option BOOLEAN DEFAULT true
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  role TEXT DEFAULT '',
  quote TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  image TEXT DEFAULT ''
);

-- Settings table (key-value store)
CREATE TABLE IF NOT EXISTS settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL DEFAULT ''
);

-- Insert default settings
INSERT INTO settings (key, value) VALUES
  ('whatsapp_number', '08107837959'),
  ('business_address', '254 Agege Motor Rd, Poatson House by Airport Exit, National Bus/stop Ikeja, Ikeja, Lagos 102214'),
  ('business_hours', 'Open 24 hours'),
  ('booking_form_fields', '{"city":true,"with_driver":true,"with_security":true}')
ON CONFLICT (key) DO NOTHING;

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT DEFAULT '',
  content TEXT DEFAULT '',
  image TEXT DEFAULT '',
  author TEXT DEFAULT '',
  category TEXT DEFAULT '',
  published_at TIMESTAMPTZ DEFAULT now()
);

-- Bookings log table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT DEFAULT '',
  service_type TEXT NOT NULL CHECK (service_type IN ('car', 'apartment')),
  item_id TEXT DEFAULT '',
  item_name TEXT DEFAULT '',
  city TEXT DEFAULT '',
  with_driver BOOLEAN DEFAULT false,
  with_security BOOLEAN DEFAULT false,
  message TEXT DEFAULT ''
);

-- Enable Row Level Security
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE apartments ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read cars" ON cars FOR SELECT USING (true);
CREATE POLICY "Public read apartments" ON apartments FOR SELECT USING (true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read settings" ON settings FOR SELECT USING (true);
CREATE POLICY "Public read blog_posts" ON blog_posts FOR SELECT USING (true);

-- Admin full access (authenticated users only)
CREATE POLICY "Admin all cars" ON cars FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all apartments" ON apartments FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all settings" ON settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all blog_posts" ON blog_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all bookings" ON bookings FOR ALL USING (auth.role() = 'authenticated');

-- Allow insert into bookings from public (for booking form)
CREATE POLICY "Public insert bookings" ON bookings FOR INSERT WITH CHECK (true);