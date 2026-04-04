'use client'

import { PROJECTS } from '@/lib/data'
import { ProjectCard } from './project-card'
import { AboutCard } from './about-card'
import { useReveal } from '@/hooks/use-reveal'

export function WorkSection() {
  useReveal()

  // On desktop: insert About card at position 4 to fill gap in middle column
  // On mobile: About card shows last (handled via CSS order)
  const firstHalf = PROJECTS.slice(0, 4)
  const secondHalf = PROJECTS.slice(4)

  return (
    <section id="work-sec" className="py-28 px-6 md:px-14 bg-off">
      <div className="text-center mb-14 reveal">
        <p className="font-mono text-[11px] tracking-[0.13em] uppercase text-dim">
          ↓ Explore a Few Brands We&apos;ve Worked With ↓
        </p>
      </div>

      {/* Mobile: flex column with About card at end via order */}
      <div className="flex flex-col md:hidden gap-1.5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        <AboutCard index={PROJECTS.length} />
      </div>

      {/* Desktop: columns layout with About card in middle */}
      <div className="hidden md:block md:columns-2 lg:columns-3 gap-1.5">
        {firstHalf.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        <AboutCard index={4} />
        {secondHalf.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i + 5} />
        ))}
      </div>
    </section>
  )
}
