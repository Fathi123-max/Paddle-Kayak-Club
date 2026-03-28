import { useEffect, useState } from 'react';

export function useHashLocation() {
  const [hash, setHash] = useState<string>(() => {
    return window.location.hash.replace('#', '') || '';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.replace('#', '') || '');
    };

    const handleLoad = () => {
      // Scroll to element if hash exists on page load
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return hash;
}
