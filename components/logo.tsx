import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
}

const sizeMap = {
  sm: 32,
  md: 42,
  lg: 52,
  xl: 68,
  hero: 160,        // Big logo on homepage hero section
};

export function Logo({ className, size = 'md' }: LogoProps) {
  const width = sizeMap[size];
  const height = Math.round(width * 0.65); // Adjust ratio if your apple-icon.png is not square

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        src="/apple-icon.png"
        alt="frameMade – Creative Agency"
        width={width}
        height={height}
        priority={size === 'hero'}           // Better performance on homepage
        className="object-contain transition-all duration-300"
      />
    </div>
  );
}
