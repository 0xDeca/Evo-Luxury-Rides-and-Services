import Hero from '@/components/Hero'
import { CategoriesSection, FeaturedCarsSection, TrustSection, TestimonialsSection, BlogPreviewSection, FAQSection, CTASection } from '@/components/HomeSections'

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedCarsSection />
      <TrustSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FAQSection />
      <CTASection />
    </>
  )
}