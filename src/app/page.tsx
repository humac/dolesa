'use client'

import {
  Navigation,
  Hero,
  Features,
  Programs,
  Impact,
  Testimonials,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation with glass morphism effect */}
      <Navigation />

      {/* Hero section with kinetic typography */}
      <Hero />

      {/* Features section with glassmorphism cards */}
      <Features />

      {/* Programs section with bento grid */}
      <Programs />

      {/* Impact section with animated stats */}
      <Impact />

      {/* Testimonials carousel */}
      <Testimonials />

      {/* Contact form section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}
