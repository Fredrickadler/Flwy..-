"use client";
import { useEffect } from "react";

export default function StarBackground({ count = 25 }) {
  useEffect(() => {
    const container = document.getElementById("particles");
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 4 + 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = `${Math.random() * 100}vh`;
      p.style.animationDuration = `${18 + Math.random() * 12}s`;
      container.appendChild(p);
    }

    return () => {
      container.innerHTML = "";
    };
  }, [count]);

  return <div id="particles" className="particles"></div>;
}