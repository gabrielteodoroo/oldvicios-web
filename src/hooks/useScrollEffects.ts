import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    // Smooth scroll
    const handler = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(target.getAttribute('href')!);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', handler));
    // Scroll reveal
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    // Header bg on scroll
    const onScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) header.classList.add('bg-black/90');
        else header.classList.remove('bg-black/90');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(a => a.removeEventListener('click', handler));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
} 