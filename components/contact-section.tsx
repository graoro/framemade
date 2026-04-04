'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/use-reveal'

export function ContactSection() {
  useReveal()

  return (
    <section id="contact-sec" className="py-28 px-6 md:px-14">
      <div className="text-center mb-18 reveal">
        <h2 className="font-display text-[clamp(40px,7vw,88px)] font-light leading-[0.95] tracking-[-0.03em]">
          Let&apos;s work <em className="italic text-gold">together</em>
        </h2>
        <p className="text-base text-dim mt-4">
          Ready to bring your vision to life? Let&apos;s get in touch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center max-w-[880px] mx-auto">
        <div className="flex justify-center md:justify-end reveal">
          <div className="relative w-[290px] h-[290px]">
            <Image
              src="https://framemade.vercel.app/images/markoPhoto.jpg"
              alt="Marko, founder of frameMade"
              fill
              className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-[600ms] shadow-[0_0_60px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <div className="reveal reveal-delay-1">
          <p className="text-[17px] leading-[1.78] text-dim">
            I&apos;m Marko. I founded{' '}
            <span className="font-serif italic" style={{ fontFamily: "'Times New Roman', serif" }}>
              frame
            </span>
            <span className="font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              Made
            </span>{' '}
            with one simple mission: to help businesses grow.
          </p>
          <p className="text-[17px] leading-[1.78] text-dim mt-4">
            After 3 years in the editing and marketing fields, I saw a major gap between creating
            beautiful content and making it profitable. My focus is on bridging that gap, using my
            expertise to build strategies that directly generate sales and revenue for my clients.
          </p>
          <p className="text-[17px] leading-[1.78] text-dim mt-4">
            Let&apos;s create something that not only looks great but also delivers results.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-y-2.5 gap-x-9 mt-14 pt-11 border-t border-border reveal">
        <a
          href="mailto:mgraoroski13@gmail.com"
          className="font-mono text-[13px] tracking-[0.04em] text-dim hover:text-gold transition-colors"
        >
          mgraoroski13@gmail.com
        </a>
        <span className="text-white/15">•</span>
        <a
          href="https://x.com/markomp4__"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] tracking-[0.04em] text-dim hover:text-gold transition-colors"
        >
          @markomp4__ on X
        </a>
      </div>
    </section>
  )
}
