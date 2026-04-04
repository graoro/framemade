import type { Metadata } from 'next'
import { CustomCursor } from '@/components/custom-cursor'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ARCHIVE } from '@/lib/data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Archive – frameMade',
  description: 'View all projects from our creative portfolio.',
}

export default function ArchivePage() {
  return (
    <>
      <CustomCursor />
      <Navbar variant="archive" />

      {/* Header */}
      <div className="py-14 px-6 md:px-14 text-center">
        <div className="flex items-center justify-center gap-3.5 font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-3.5">
          <span className="w-6 h-px bg-gold/50" />
          Full Archive
          <span className="w-6 h-px bg-gold/50" />
        </div>
        <h2 className="font-display text-[clamp(40px,5.5vw,76px)] font-light leading-[1.05] tracking-[-0.02em]">
          All <em className="italic text-gold">projects</em>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mx-6 md:mx-14 mb-14">
        {ARCHIVE.map((item, i) => (
          <div
            key={i}
            className="bg-black p-7 hover:bg-surface transition-colors group"
          >
            <div className="aspect-video overflow-hidden rounded-sm mb-4 bg-surface">
              <Image
                src={item.thumb}
                alt={item.client}
                width={600}
                height={337}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              />
            </div>
            <div className="font-mono text-[9px] tracking-[0.1em] text-faint mb-1.5">
              {item.year}
            </div>
            <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-gold mb-2">
              {item.category}
            </div>
            <h3 className="text-[15px] font-medium text-white mb-2">{item.client}</h3>
            <p className="text-xs text-dim leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.07em] uppercase text-faint border border-border px-2 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}
