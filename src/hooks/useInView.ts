import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface UseInViewReturn {
  ref: React.RefObject<HTMLDivElement>;
  inView: boolean;
}

/**
 * Custom hook for tracking whether an element is in the viewport
 * Uses Intersection Observer API for performance
 *
 * @param options - Configuration options for the observer
 * @returns Object with ref to attach to element and inView boolean
 */
export const useInView = (options: UseInViewOptions = {}): UseInViewReturn => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Unobserve if triggerOnce is true (performance optimization)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          // Allow re-triggering animation when element leaves view
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
};
