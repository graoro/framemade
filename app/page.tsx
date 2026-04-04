'use client'

import { CustomCursor } from '@/components/custom-cursor'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { WorkSection } from '@/components/work-section'
import { Testimonials } from '@/components/testimonials'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <CustomCursor />
      <Navbar onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Marquee />
        <WorkSection />
        <Testimonials />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
