'use client'

import { useEffect, useState } from 'react'
import { Logo } from './logo'
import Link from 'next/link'

interface NavbarProps {
  onNavigate?: (id: string) => void
  variant?: 'main' | 'case-study' | 'archive'
}

export function Navbar({ onNavigate, variant = 'main' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      if (variant === 'main') {
        const sections = ['work', 'about', 'contact']
        for (const id of sections) {
          const el = document.getElementById(`${id}-sec`)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top < 200 && rect.bottom > 80) {
              setActiveSection(id)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    if (onNavigate) {
      onNavigate(id)
    }
  }

  if (variant === 'case-study') {
    return (
      <nav className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-border sticky top-0 bg-black/[0.92] backdrop-blur-[18px] z-[100]">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-dim hover:text-white transition-colors"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Back
        </Link>
        <Logo />
        <Link
          href="/#contact-sec"
          className="font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-gold px-5 py-2.5 hover:bg-white hover:-translate-y-px transition-all hidden md:inline-block"
        >
          Get in touch
        </Link>
        <div className="w-[100px] md:hidden" />
      </nav>
    )
  }

  if (variant === 'archive') {
    return (
      <nav className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-border sticky top-0 bg-black/[0.92] backdrop-blur-[18px] z-[100]">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-dim hover:text-white transition-colors"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Back
        </Link>
        <Logo />
        <div className="w-[100px]" />
      </nav>
    )
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 md:px-14 transition-all duration-[400ms] ${
          scrolled
            ? 'py-4 bg-black/[0.92] backdrop-blur-[18px] border-b border-border'
            : 'py-6 border-b border-transparent'
        }`}
      >
        <Logo />
        <ul className="hidden md:flex items-center gap-10 list-none">
          {['work', 'about', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(`${item}-sec`)}
                className={`font-mono text-[11px] tracking-[0.12em] uppercase bg-transparent border-none p-0 relative transition-colors ${
                  activeSection === item ? 'text-white' : 'text-dim hover:text-white'
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-[-3px] left-0 h-px bg-gold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    activeSection === item ? 'right-0' : 'right-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleNavClick('contact-sec')}
          className="hidden md:inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-black bg-gold px-5 py-2.5 border-none hover:bg-white hover:-translate-y-px transition-all"
        >
          Get in touch
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1"
        >
          <span
            className={`block w-[22px] h-px bg-white transition-transform duration-300 ${
              mobileOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-px bg-white transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-px bg-white transition-transform duration-300 ${
              mobileOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black z-[400] flex-col items-center justify-center gap-9 ${
          mobileOpen ? 'flex' : 'hidden'
        }`}
      >
        {['work', 'about', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(`${item}-sec`)}
            className="font-display text-[52px] font-light bg-transparent border-none text-white hover:text-gold transition-colors capitalize"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  )
}
