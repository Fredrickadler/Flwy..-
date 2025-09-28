"use client";
import { useEffect, useState } from "react";

export default function BottomNav({ active = "home", onNavigate }) {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setCompact(true);
      else setCompact(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bottom-nav">
      {active === "home" && (
        <button
          className={`nav-btn ${compact ? "compact" : "active"}`}
          onClick={() => onNavigate("home")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"/>
          </svg>
          <span>Home</span>
        </button>
      )}
      {active === "orders" && (
        <button
          className={`nav-btn ${compact ? "compact" : "active"}`}
          onClick={() => onNavigate("orders")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M5 6h14M5 12h14M5 18h14"/>
          </svg>
          <span>Orders</span>
        </button>
      )}
    </div>
  );
}