'use client'

import { useReveal } from '@/hooks/use-reveal'

export function CtaBand() {
  useReveal()

  return (
    <div className="text-center py-32 px-6 md:px-14 bg-off relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_50%,rgba(200,184,154,0.055)_0%,transparent_70%)] pointer-events-none" />

      <h2 className="font-display text-[clamp(46px,8vw,96px)] font-light leading-[0.93] tracking-[-0.03em] mb-7 relative reveal">
        Let&apos;s Create
        <br />
        Something <em className="italic text-gold">Amazing</em>
      </h2>

      <p className="text-base text-dim max-w-[480px] mx-auto mb-11 leading-[1.78] relative reveal reveal-delay-1">
        Ready to bring your vision to life? Whether it&apos;s a podcast, commercial, or creative
        project, I&apos;m here to help you tell your story.
      </p>

      <a
        href="mailto:mgraoroski13@gmail.com"
        className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.15em] uppercase text-black bg-gold px-12 py-5 hover:bg-white hover:-translate-y-0.5 hover:gap-4 transition-all relative reveal reveal-delay-2"
      >
        Work With Me
        <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0 transition-transform">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </a>
    </div>
  )
}
