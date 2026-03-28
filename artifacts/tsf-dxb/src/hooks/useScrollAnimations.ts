// src/hooks/useScrollAnimations.ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollAnimationOptions {
  trigger: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export interface TweenVars {
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  duration?: number;
  ease?: string;
  [key: string]: unknown;
}

/**
 * Creates a GSAP timeline linked to scroll
 */
export function useScrollAnimation<T extends TweenVars = TweenVars>(
  options: ScrollAnimationOptions,
  vars: T
): React.RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        vars.from || {},
        {
          ...vars,
          scrollTrigger: {
            trigger: options.trigger instanceof Element ? options.trigger : element,
            start: options.start || 'top 80%',
            end: options.end || 'top 30%',
            scrub: options.scrub ?? true,
            pin: options.pin ?? false,
            markers: options.markers ?? false,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options.trigger, options.start, options.end, options.scrub, options.pin, options.markers, vars]);

  return ref;
}

/**
 * Creates a scroll-linked progress bar
 */
export function useScrollProgress(
  targetRef: React.RefObject<HTMLElement>
): { progress: number } {
  const progressRef = useRef(0);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: target,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });
    });

    return () => ctx.revert();
  }, [targetRef]);

  return { progress: progressRef.current };
}

/**
 * Animates a counter from 0 to target value when visible
 */
export function useCounterAnimation(
  targetValue: number,
  duration: number = 2
): React.RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        innerText: targetValue,
        duration: duration,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [targetValue, duration]);

  return ref;
}
