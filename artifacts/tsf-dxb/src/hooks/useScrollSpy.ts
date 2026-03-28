import { useEffect, useState } from 'react';

interface ScrollSpyOptions {
  threshold?: number;
  rootMargin?: string;
}

interface SectionInfo {
  id: string;
  element: Element;
}

export function useScrollSpy(sectionIds: string[], options: ScrollSpyOptions = {}) {
  const { threshold = 0.3, rootMargin = '0px' } = options;
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Get all section elements
    const sections: SectionInfo[] = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;
        return { id, element };
      })
      .filter((item): item is SectionInfo => item !== null);

    if (sections.length === 0) return;

    // IntersectionObserver callback
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin,
    });

    // Observe all sections
    sections.forEach(({ element }) => observer.observe(element));

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [sectionIds.join(','), threshold, rootMargin]);

  return activeSection;
}
