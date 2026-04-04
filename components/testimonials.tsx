'use client'

import { TESTIMONIALS } from '@/lib/data'
import { useReveal } from '@/hooks/use-reveal'

export function Testimonials() {
  useReveal()

  return (
    <section className="py-28 px-6 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TESTIMONIALS.map((testimonial, i) => (
          <div
            key={i}
            className={`border-t border-border pt-8 reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
          >
            <p className="font-display text-[19px] font-light leading-relaxed text-white/[0.78] mb-6">
              {testimonial.quote}
            </p>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-faint">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
