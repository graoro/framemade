import { Logo } from './logo'
import { Twitter, Instagram, Mail } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-11 px-6 md:px-14 flex flex-col items-center gap-6">
      <Logo size="sm" />
      <div className="flex justify-center gap-6">
        <a
          href="mailto:marko@framemade.space"
          className="text-faint hover:text-gold transition-colors"
          aria-label="Email"
        >
          <Mail size={16} />
        </a>
        <a
          href="https://x.com/markomp4__"
          target="_blank"
          rel="noopener noreferrer"
          className="text-faint hover:text-gold transition-colors"
          aria-label="X (Twitter)"
        >
          <Twitter size={16} />
        </a>
        <a
          href="https://www.instagram.com/framemade.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-faint hover:text-gold transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={16} />
        </a>
      </div>
      <div className="font-mono text-[10px] text-white/[0.13]">
        © {year} frameMade. All Rights Reserved.
      </div>
    </footer>
  )
}
