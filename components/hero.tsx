'use client'

import { Logo } from './logo'

interface HeroProps {
  onNavigate?: (id: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-14 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(200,184,154,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <h1 className="animate-fade-up animate-fade-up-1 leading-[0.88] tracking-[-0.03em] mb-7">
        <Logo size="hero" />
      </h1>
      
      <p className="text-[clamp(18px,2.2vw,24px)] text-dim mb-13 tracking-[0.03em] animate-fade-up animate-fade-up-2">
        Where stories take shape.
      </p>
      
      <button
        onClick={() => onNavigate?.('work-sec')}
        className="font-mono text-xs tracking-[0.16em] uppercase text-white bg-transparent border border-gold/35 px-12 py-4 hover:border-gold hover:bg-gold-dim hover:-translate-y-0.5 transition-all animate-fade-up animate-fade-up-3"
      >
        View Our Work
      </button>
      
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 animate-fade-up animate-fade-up-4">
        <div className="w-px h-[38px] bg-gradient-to-b from-gold to-transparent animate-scroll-pulse" />
        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-faint">
          Scroll
        </span>
      </div>
    </section>
  )
}
