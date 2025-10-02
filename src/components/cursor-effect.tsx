import { useEffect, useState, useRef } from "react";

export function CursorEffect() {
  const [hasCursor, setHasCursor] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device has cursor support
    const checkCursorSupport = () => {
      // Check for touch device
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      // Check for pointer capabilities
      const hasFineCursor = window.matchMedia('(pointer: fine)').matches;
      
      setHasCursor(!isTouchDevice && hasFineCursor);
    };

    checkCursorSupport();
    
    // Listen for media query changes
    const mediaQuery = window.matchMedia('(pointer: fine)');
    mediaQuery.addEventListener('change', checkCursorSupport);

    return () => {
      mediaQuery.removeEventListener('change', checkCursorSupport);
    };
  }, []);

  useEffect(() => {
    if (!hasCursor) return;

    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      // Update target position directly without state
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      
      // Start animation only when moving
      if (!isMoving) {
        isMoving = true;
        rafRef.current = requestAnimationFrame(updateCursor);
      }
      
      // Reset movement flag after 100ms of no movement
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      }, 100);
    };

    const updateCursor = () => {
      if (cursorRef.current && isMoving) {
        // Check if we're close enough to stop animating
        const deltaX = targetPos.current.x - currentPos.current.x;
        const deltaY = targetPos.current.y - currentPos.current.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 0.5) {
          // Close enough, stop animating
          currentPos.current.x = targetPos.current.x;
          currentPos.current.y = targetPos.current.y;
          isMoving = false;
        } else {
          // Continue smooth interpolation
          currentPos.current.x += deltaX * 0.2;
          currentPos.current.y += deltaY * 0.2;
        }
        
        // Use more efficient transform
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x - 6}px, ${currentPos.current.y - 6}px, 0)`;
        
        if (isMoving) {
          rafRef.current = requestAnimationFrame(updateCursor);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [hasCursor]);

  // Don't render on touch devices or devices without fine cursor
  if (!hasCursor) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-40 mix-blend-difference will-change-transform"
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div
        className="w-3 h-3 rounded-full bg-white"
        style={{
          filter: 'blur(0px)',
          boxShadow: '0 0 15px 6px rgba(255, 255, 255, 0.6), 0 0 30px 12px rgba(255, 255, 255, 0.3)',
        }}
      />
    </div>
  );
}