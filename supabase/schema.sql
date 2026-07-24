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

-- Grants (table-level access; RLS still filters rows)
GRANT SELECT ON cars TO anon, authenticated;
GRANT SELECT ON apartments TO anon, authenticated;
GRANT SELECT ON testimonials TO anon, authenticated;
GRANT SELECT ON settings TO anon, authenticated;
GRANT SELECT ON blog_posts TO anon, authenticated;

GRANT INSERT ON bookings TO anon;

-- Optional: authenticated can view their own bookings later; for now we keep it open only via RLS policies below
GRANT SELECT ON bookings TO authenticated;

-- -------------------------
-- Policies (drop + recreate)
-- -------------------------

-- Cars: public read
DROP POLICY IF EXISTS "Public read cars" ON public.cars;
CREATE POLICY "Public read cars"
ON public.cars
FOR SELECT
TO anon
USING (true);

DROP POLICY IF EXISTS "Admin all cars" ON public.cars;
CREATE POLICY "Admin all cars"
ON public.cars
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Apartments: public read
DROP POLICY IF EXISTS "Public read apartments" ON public.apartments;
CREATE POLICY "Public read apartments"
ON public.apartments
FOR SELECT
TO anon
USING (true);

DROP POLICY IF EXISTS "Admin all apartments" ON public.apartments;
CREATE POLICY "Admin all apartments"
ON public.apartments
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Testimonials: public read
DROP POLICY IF EXISTS "Public read testimonials" ON public.testimonials;
CREATE POLICY "Public read testimonials"
ON public.testimonials
FOR SELECT
TO anon
USING (true);

DROP POLICY IF EXISTS "Admin all testimonials" ON public.testimonials;
CREATE POLICY "Admin all testimonials"
ON public.testimonials
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Settings: public read (be careful: this exposes settings to the world)
DROP POLICY IF EXISTS "Public read settings" ON public.settings;
CREATE POLICY "Public read settings"
ON public.settings
FOR SELECT
TO anon
USING (true);

DROP POLICY IF EXISTS "Admin all settings" ON public.settings;
CREATE POLICY "Admin all settings"
ON public.settings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Blog posts: public read
DROP POLICY IF EXISTS "Public read blog_posts" ON public.blog_posts;
CREATE POLICY "Public read blog_posts"
ON public.blog_posts
FOR SELECT
TO anon
USING (true);

DROP POLICY IF EXISTS "Admin all blog_posts" ON public.blog_posts;
CREATE POLICY "Admin all blog_posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Bookings: public insert (no reading restriction beyond what we grant)
DROP POLICY IF EXISTS "Public insert bookings" ON public.bookings;
CREATE POLICY "Public insert bookings"
ON public.bookings
FOR INSERT
TO anon
WITH CHECK (true);

DROP POLICY IF EXISTS "Admin all bookings" ON public.bookings;
CREATE POLICY "Admin all bookings"
ON public.bookings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);