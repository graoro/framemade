'use client'

import Image from 'next/image'

interface AboutCardProps {
  index: number
}

export function AboutCard({ index }: AboutCardProps) {
  const delayClass = index > 0 ? `reveal-delay-${Math.min(index, 4)}` : ''

  const scrollToContact = () => {
    const el = document.getElementById('contact-sec')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button
      onClick={scrollToContact}
      className={`group reveal ${delayClass} block mb-1.5 break-inside-avoid w-full text-left cursor-pointer`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface">
        <Image
  src="/images/markoPhoto.jpg"
  alt="Marko, founder of frameMade"
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Full overlay with blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] group-hover:backdrop-blur-0 group-hover:bg-black/[0.1] transition-all duration-500" />
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h3 className="font-display text-[clamp(28px,5vw,42px)] font-light leading-[1] tracking-[-0.02em] text-center text-white drop-shadow-lg">
            Let&apos;s work <em className="italic text-gold">together</em>
          </h3>
        </div>

        {/* About Me button with expanding animation */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-3 px-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.1] backdrop-blur-[14px] border border-white/[0.18] text-[12px] text-white group-hover:bg-white/[0.2] group-hover:px-6 group-hover:scale-[1.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            About Me
            <span className="text-[10px]">↗</span>
          </div>
        </div>
      </div>
    </button>
  )
}
