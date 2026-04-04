'use client'

import { PROJECTS } from '@/lib/data'
import { ProjectCard } from './project-card'
import { AboutCard } from './about-card'
import { useReveal } from '@/hooks/use-reveal'

export function WorkSection() {
  useReveal()

  // Insert About card at position 4 (after 4 project cards) to fill the gap in the middle column
  const firstHalf = PROJECTS.slice(0, 4)
  const secondHalf = PROJECTS.slice(4)

  return (
    <section id="work-sec" className="py-28 px-6 md:px-14 bg-off">
      <div className="text-center mb-14 reveal">
        <p className="font-mono text-[11px] tracking-[0.13em] uppercase text-dim">
          ↓ Explore a Few Brands We&apos;ve Worked With ↓
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-1.5">
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
