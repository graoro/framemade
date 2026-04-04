'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CustomCursor } from '@/components/custom-cursor'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type { CaseStudy } from '@/lib/data'

interface CaseStudyContentProps {
  caseStudy: CaseStudy
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <>
      <CustomCursor />
      <Navbar variant="case-study" />

      {/* Hero */}
      <div className="py-18 px-6 md:px-14 border-b border-border">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-5">
          Case Study — {caseStudy.client}
        </div>
        <h1 className="font-display text-[clamp(46px,7vw,90px)] font-light leading-[0.95] tracking-[-0.03em] mb-5">
          {caseStudy.title}
        </h1>
        <p className="text-[17px] text-dim max-w-[560px] leading-[1.78]">{caseStudy.summary}</p>

        {/* Metrics */}
        <div className="flex flex-col md:flex-row gap-px bg-border border border-border mt-13">
          {caseStudy.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-black px-10 py-7 flex-1 hover:bg-surface transition-colors"
            >
              <div className="font-display text-[38px] font-light text-white leading-none">
                {metric.value}
              </div>
              <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-faint mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="py-18 px-6 md:px-14 max-w-[860px] mx-auto">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          The Challenge
        </div>
        <p className="text-base text-dim leading-[1.88] mb-13">{caseStudy.challenge}</p>

        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          The Solution
        </div>
        <p className="text-base text-dim leading-[1.88] mb-13">{caseStudy.solution}</p>

        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          Execution
        </div>
        <p className="text-base text-dim leading-[1.88] mb-13">{caseStudy.execution}</p>

        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          Work Samples
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-13">
          {caseStudy.visuals.map((visual, i) => {
            const isVideo = visual.type === 'video'
            const content = (
              <>
                <Image
                  src={visual.thumb || visual.src}
                  alt={visual.caption}
                  fill
                  className={`object-cover ${isVideo ? 'group-hover:scale-[1.04]' : ''} transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]`}
                />
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover:bg-black/15 transition-colors">
                    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11">
                      <circle cx="24" cy="24" r="24" fill="rgba(200,184,154,0.13)" />
                      <polygon points="19,15 34,24 19,33" fill="rgba(245,242,238,0.9)" />
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-black/[0.88] to-transparent">
                  <span className="font-mono text-[9px] tracking-[0.08em] text-dim">
                    {visual.caption}
                  </span>
                </div>
              </>
            )

            if (isVideo) {
              return (
                <a
                  key={i}
                  href={visual.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video overflow-hidden rounded-sm bg-surface group cursor-pointer"
                >
                  {content}
                </a>
              )
            }

            return (
              <div
                key={i}
                className="relative aspect-video overflow-hidden rounded-sm bg-surface"
              >
                {content}
              </div>
            )
          })}
        </div>

        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          Results
        </div>
        <p className="text-base text-dim leading-[1.88] mb-13">{caseStudy.results}</p>

        <p className="font-display text-[22px] italic text-white leading-[1.55] mb-20">
          {caseStudy.closing}
        </p>

        {/* Bottom CTA */}
        <div className="text-center pt-14 border-t border-border">
          <h3 className="font-display text-[46px] font-light mb-7">Want results like these?</h3>
          <Link
            href="/#contact-sec"
            className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.15em] uppercase text-black bg-gold px-12 py-5 hover:bg-white hover:-translate-y-0.5 hover:gap-4 transition-all"
          >
            Work With Me
            <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 shrink-0">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
