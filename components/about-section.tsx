'use client'

import { PROCESS_STEPS } from '@/lib/data'
import { useReveal } from '@/hooks/use-reveal'

export function AboutSection() {
  useReveal()

  return (
    <section id="about-sec" className="py-28 px-6 md:px-14 bg-off">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3.5 font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-3.5 reveal">
          <span className="w-6 h-px bg-gold/50" />
          About
        </div>
        <h2 className="font-display text-[clamp(40px,5.5vw,76px)] font-light leading-[1.05] tracking-[-0.02em] reveal">
          The <em className="italic text-gold">mission</em>
        </h2>
        <div className="max-w-[680px] mx-auto mt-9 text-[17px] text-dim leading-[1.88] text-center reveal reveal-delay-1">
          <p>
            At{' '}
            <span className="font-serif italic" style={{ fontFamily: "'Times New Roman', serif" }}>
              frame
            </span>
            <span className="font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              MADE
            </span>
            , we believe every brand has a story worth telling — and telling it right makes all the
            difference. We are a modern video editing and marketing agency built to help creators,
            businesses, and brands cut through the noise with content that actually connects.
          </p>
          <p className="mt-5">
            From high-impact edits to complete marketing strategies, our mission is simple: turning
            your ideas into visuals that drive growth. We combine sharp storytelling, engaging
            visuals, and data-driven marketing to make sure your brand isn&apos;t just seen — it&apos;s
            remembered.
          </p>
          <p className="mt-5 text-faint">
            With years of experience in post-production, we bring technical expertise and creative
            vision to every project, ensuring your content stands out in today&apos;s competitive
            landscape.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mt-18">
        {PROCESS_STEPS.map((step, i) => (
          <div
            key={step.number}
            className={`bg-black px-8 py-10 hover:bg-surface transition-colors reveal ${
              i > 0 ? `reveal-delay-${i}` : ''
            }`}
          >
            <div className="font-display text-[56px] font-light text-gold/[0.07] leading-none mb-4">
              {step.number}
            </div>
            <h3 className="font-display text-xl font-normal mb-2.5">{step.title}</h3>
            <p className="text-[13px] text-dim leading-[1.7]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
