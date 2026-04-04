'use client'

import { SERVICES } from '@/lib/data'

export function Marquee() {
  // Duplicate items for seamless infinite scroll
  const items = [...SERVICES, ...SERVICES]

  return (
    <div className="border-y border-border py-4 overflow-hidden bg-surface">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex shrink-0">
            {items.map((service, i) => (
              <span
                key={`${groupIndex}-${i}`}
                className="inline-flex items-center gap-7 pr-7 font-mono text-[10px] tracking-[0.12em] uppercase text-dim whitespace-nowrap"
              >
                {service}
                <span className="w-[3px] h-[3px] bg-gold rounded-full shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
