import Hero from '@/components/Hero'
import { CategoriesSection, FeaturedCarsSection, CompanyLogosSection, TrustSection, GallerySection, TestimonialsSection, BlogPreviewSection, FAQSection, CTASection } from '@/components/HomeSections'

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedCarsSection />
      <CompanyLogosSection />
      <TrustSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FAQSection />
      <CTASection />
    </>
  )
}