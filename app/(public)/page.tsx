import Hero from '@/components/Hero'
import { ServicesSection, FeaturedCarsSection, FeaturedApartmentsSection, TrustBadgesSection, TestimonialsSection, BlogPreviewSection, FAQSection, CTASection } from '@/components/HomeSections'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedCarsSection />
      <FeaturedApartmentsSection />
      <TrustBadgesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FAQSection />
      <CTASection />
    </>
  )
}