import { gsap } from 'gsap';

export function setupAnimations() {
  // Detect if device prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    gsap.from('.glitch', {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: 'power4.out'
    });

    gsap.from('.time-block', {
      duration: 1,
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      delay: 0.5
    });

    gsap.from('.subscribe', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 1.5
    });
  } else {
    // Simple fade-in for reduced motion preference
    gsap.from(['.glitch', '.time-block', '.subscribe'], {
      duration: 0.5,
      opacity: 0,
      stagger: 0.1
    });
  }
}