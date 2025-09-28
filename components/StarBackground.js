import { useEffect } from 'react';

export default function StarBackground({ count = 30 }) {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'particles';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 3; // بزرگ‌تر
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = `${Math.random() * 100}vh`;
      p.style.animationDuration = `${18 + Math.random() * 10}s`; // کندتر
      container.appendChild(p);
    }

    return () => container.remove();
  }, [count]);

  return null;
}