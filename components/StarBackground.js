import { useEffect } from 'react';

export default function StarBackground({ count = 80 }) {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'particles';
    container.id = 'particles-root';
    document.body.appendChild(container);

    const particles = [];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      resetParticle(p);
      container.appendChild(p);
      particles.push(p);
    }

    function resetParticle(p) {
      const size = Math.random() * 3 + 1;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = `${Math.random() * 120}vh`;
      p.style.animationDuration = `${8 + Math.random() * 12}s`;
      p.style.opacity = String(0);
    }

    // reposition periodically
    const t = setInterval(() => {
      particles.forEach((p) => {
        resetParticle(p);
      });
    }, 2500);

    return () => {
      clearInterval(t);
      container.remove();
    };
  }, [count]);

  return null;
}