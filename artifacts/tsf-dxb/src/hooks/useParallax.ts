// src/hooks/useParallax.ts
import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  enabled?: boolean;
}

export function useParallax({
  speed = 0.5,
  enabled = true,
}: UseParallaxOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementVisible = elementTop < window.scrollY + window.innerHeight;

      if (elementVisible) {
        const scrolled = window.scrollY - elementTop;
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, enabled]);

  return { ref, offset };
}
