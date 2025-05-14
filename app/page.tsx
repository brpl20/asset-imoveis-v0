import Hero from "@/components/hero"
import FeaturedProperties from "@/components/featured-properties"
import Testimonials from "@/components/testimonials"
import AboutSection from "@/components/about-section"
import BlogPreview from "@/components/blog-preview"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <FeaturedProperties />

      <AboutSection />

      <Testimonials />

      <BlogPreview />

    </div>
  )
}
