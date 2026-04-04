import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-4xl',
  hero: 'text-[clamp(48px,11vw,150px)]',
}

export function Logo({ className, size = 'md' }: LogoProps) {
  return (
    <div className={cn('flex items-baseline gap-0', sizeClasses[size], className)}>
      <span className="font-serif font-normal italic" style={{ fontFamily: "'Times New Roman', serif" }}>
        frame
      </span>
      <span
        className="font-bold"
        style={{
          fontFamily: "'Arial', sans-serif",
          fontSize: size === 'hero' ? 'inherit' : '0.9em',
        }}
      >
        Made
      </span>
    </div>
  )
}
