import { useState, useEffect } from "react";

/**
 * Hook for tracking media query (responsive design)
 * @param query - Media query string (e.g., '(min-width: 768px)')
 * @returns true if query matches, false otherwise
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}
