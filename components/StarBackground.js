"use client";
import { useEffect } from "react";

export default function StarBackground({ count = 25 }) {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "particles";
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 3 + 2; // کمی بزرگتر
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = `${Math.random() * 100}vh`;
      p.style.animationDuration = `${20 + Math.random() * 12}s`; // خیلی آروم
      container.appendChild(p);
    }

    return () => container.remove();
  }, [count]);

  return null;
}