import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal` / `.reveal-img` element when it
 * enters the viewport. Re-runs when the language changes so newly rendered
 * content is observed too.
 */
export function useRevealOnScroll(deps: unknown[] = []) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible), .reveal-img:not(.is-visible)')
    );

    if (elements.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}