import { useEffect, useRef } from "react";

/**
 * Shooting Stars Background - Figma-inspired design system
 * Component-based, layered, with soft glows and smooth animations
 * 
 * Design Tokens:
 * - Background: Deep navy #0b0d17
 * - Star glow core: #ffffff
 * - Star glow edges: #a3c9ff (blue), #d1b3ff (violet)
 * - Motion: ease-in-out curves for twinkle, ease-out for shooting stars
 */

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinklePhase: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function ShootingStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const shootingStars = useRef<ShootingStar[]>([]);
  const lastShootingStarTime = useRef(0);
  const animationId = useRef<number>();
  const isMobile = useRef(false);

  // Configuration optimized for performance
  const CONFIG = {
    NUM_STARS: 180,
    STAR_MIN_RADIUS: 1,
    STAR_MAX_RADIUS: 3,
    SHOOTING_STAR_FREQUENCY: 3000, // ms between shooting stars
    SHOOTING_STAR_FREQUENCY_VARIANCE: 3000, // variance in frequency
    MAX_SHOOTING_STARS: 2,
    SHOOTING_STAR_SPEED: 8,
    SHOOTING_STAR_LENGTH: 150,
    MOBILE_STAR_REDUCTION: 0.5,
  };

  // Initialize static stars with Figma-like glow colors
  const initStars = (width: number, height: number) => {
    stars.current = [];
    const numStars = Math.floor(
      CONFIG.NUM_STARS * (isMobile.current ? CONFIG.MOBILE_STAR_REDUCTION : 1)
    );

    // Predefined glow colors matching Figma design tokens
    const glowColors = ['#ffffff', '#a3c9ff', '#d1b3ff'];

    for (let i = 0; i < numStars; i++) {
      stars.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: CONFIG.STAR_MIN_RADIUS + Math.random() * (CONFIG.STAR_MAX_RADIUS - CONFIG.STAR_MIN_RADIUS),
        opacity: 0.6 + Math.random() * 0.4,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.02 + Math.random() * 0.03,
        color: glowColors[Math.floor(Math.random() * glowColors.length)],
      });
    }
  };

  // Create a new shooting star
  const createShootingStar = (width: number, height: number) => {
    if (shootingStars.current.length >= CONFIG.MAX_SHOOTING_STARS) return;

    const fromLeft = Math.random() > 0.5;
    const angle = fromLeft ? -Math.PI / 4 : -3 * Math.PI / 4; // Diagonal trajectories

    const shootingStar: ShootingStar = {
      x: fromLeft ? Math.random() * width * 0.3 : width - Math.random() * width * 0.3,
      y: Math.random() * height * 0.3,
      vx: Math.cos(angle) * CONFIG.SHOOTING_STAR_SPEED,
      vy: Math.sin(angle) * CONFIG.SHOOTING_STAR_SPEED,
      length: CONFIG.SHOOTING_STAR_LENGTH,
      opacity: 0.8,
      life: 0,
      maxLife: 120, // Frames (~2 seconds at 60fps)
    };

    shootingStars.current.push(shootingStar);
  };

  // Draw star with multi-layer glow effect (Figma-like shadows/blur)
  const drawStar = (ctx: CanvasRenderingContext2D, star: Star, twinkleValue: number) => {
    const glowRadius = star.radius * (isMobile.current ? 2 : 3);
    
    // Simplified for mobile - single glow layer
    if (isMobile.current) {
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowRadius);
      gradient.addColorStop(0, `${star.color}${Math.round(twinkleValue * 200).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${star.color}00`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    // Desktop: Multi-layer glow for richer effect
    // Layer 1: Outer glow (largest, most transparent)
    const gradient1 = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowRadius * 1.5);
    gradient1.addColorStop(0, `${star.color}40`); // 25% opacity
    gradient1.addColorStop(1, `${star.color}00`); // transparent
    ctx.fillStyle = gradient1;
    ctx.beginPath();
    ctx.arc(star.x, star.y, glowRadius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Layer 2: Mid glow
    const gradient2 = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowRadius);
    gradient2.addColorStop(0, `${star.color}80`); // 50% opacity
    gradient2.addColorStop(1, `${star.color}00`);
    ctx.fillStyle = gradient2;
    ctx.beginPath();
    ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Layer 3: Core (bright center)
    ctx.fillStyle = star.color;
    ctx.globalAlpha = twinkleValue;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  // Draw shooting star with gradient trail and motion blur
  const drawShootingStar = (ctx: CanvasRenderingContext2D, shootingStar: ShootingStar) => {
    const { x, y, vx, vy, length, opacity } = shootingStar;
    
    // Calculate trail end point
    const normalizedVx = -vx / Math.sqrt(vx * vx + vy * vy);
    const normalizedVy = -vy / Math.sqrt(vx * vx + vy * vy);
    const tailX = x + normalizedVx * length;
    const tailY = y + normalizedVy * length;

    // Motion blur glow (Figma-style spread blur effect ~15-20px) - reduced on mobile
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = isMobile.current ? 10 : 20;

    // Gradient trail: bright white head → transparent tail
    const gradient = ctx.createLinearGradient(x, y, tailX, tailY);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.9})`);
    gradient.addColorStop(0.3, `rgba(255, 255, 255, ${opacity * 0.6})`);
    gradient.addColorStop(0.7, `rgba(255, 255, 255, ${opacity * 0.3})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = isMobile.current ? 2 : 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();

    // Reset shadow
    ctx.shadowBlur = 0;

    // Bright head dot
    const headRadius = isMobile.current ? 6 : 8;
    const headGradient = ctx.createRadialGradient(x, y, 0, x, y, headRadius);
    headGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    headGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = headGradient;
    ctx.beginPath();
    ctx.arc(x, y, headRadius, 0, Math.PI * 2);
    ctx.fill();
  };

  // Update shooting stars
  const updateShootingStars = () => {
    shootingStars.current = shootingStars.current.filter(star => {
      star.x += star.vx;
      star.y += star.vy;
      star.life += 1;

      // Fade out smoothly (ease-out curve)
      const lifeRatio = star.life / star.maxLife;
      if (lifeRatio > 0.7) {
        star.opacity = 0.8 * (1 - (lifeRatio - 0.7) / 0.3);
      }

      return star.life < star.maxLife;
    });
  };

  // Main animation loop - optimized with requestAnimationFrame
  const animate = (timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;

    // Clear with deep navy background (Figma design token)
    ctx.fillStyle = '#0b0d17';
    ctx.fillRect(0, 0, width, height);

    // Draw static stars with twinkle (ease-in-out)
    stars.current.forEach(star => {
      star.twinklePhase += star.twinkleSpeed;
      const twinkleValue = 0.6 + Math.abs(Math.sin(star.twinklePhase)) * 0.4;
      drawStar(ctx, star, twinkleValue);
    });

    // Update and draw shooting stars
    updateShootingStars();
    shootingStars.current.forEach(shootingStar => {
      drawShootingStar(ctx, shootingStar);
    });

    // Create new shooting star if enough time has passed
    if (timestamp - lastShootingStarTime.current > 
        CONFIG.SHOOTING_STAR_FREQUENCY + Math.random() * CONFIG.SHOOTING_STAR_FREQUENCY_VARIANCE) {
      createShootingStar(width, height);
      lastShootingStarTime.current = timestamp;
    }

    animationId.current = requestAnimationFrame(animate);
  };

  // Handle canvas resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    isMobile.current = window.innerWidth < 768;

    initStars(canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.warn('Canvas 2D context not supported');
      return;
    }

    // Initial setup
    handleResize();

    // Start animation
    animationId.current = requestAnimationFrame(animate);

    // Listen for resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
}