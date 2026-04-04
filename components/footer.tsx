import { Logo } from './logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-11 px-6 md:px-14 flex flex-col items-center gap-6">
      <Logo size="sm" />
      <div className="flex justify-center gap-8">
        <a
          href="https://x.com/markomp4__"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.12em] uppercase text-faint hover:text-gold transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/framemade.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.12em] uppercase text-faint hover:text-gold transition-colors"
        >
          Instagram
        </a>
      </div>
      <div className="font-mono text-[10px] text-white/[0.13]">
        © {year} frameMade. All Rights Reserved.
      </div>
    </footer>
  )
}
