'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

// Asymmetrical aspect ratios for masonry effect
const aspectRatios = [
  'aspect-[4/5]',    // tall
  'aspect-[3/4]',    // medium-tall
  'aspect-[4/3]',    // landscape
  'aspect-[1/1]',    // square
  'aspect-[5/6]',    // slightly tall
  'aspect-[3/4]',    // medium-tall
  'aspect-[4/5]',    // tall
  'aspect-[1/1]',    // square
  'aspect-[5/4]',    // landscape
]

export function ProjectCard({ project, index }: ProjectCardProps) {
  const delayClass = index > 0 ? `reveal-delay-${Math.min(index, 4)}` : ''
  const aspectRatio = aspectRatios[index % aspectRatios.length]

  return (
    <Link
      href={`/case-study/${project.id}`}
      className={`group reveal ${delayClass} block mb-1.5 break-inside-avoid`}
    >
      <div className={`relative ${aspectRatio} overflow-hidden rounded-lg bg-surface`}>
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/[0.18] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-3 px-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.1] backdrop-blur-[14px] border border-white/[0.18] text-[12px] text-white group-hover:bg-white/[0.2] group-hover:scale-[1.05] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            View Casestudy
            <span className="text-[10px]">↗</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
