"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };

    if (!isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  if (!isSDKLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">🚀 Flwy</div>
        <button className="wallet-btn">Connect Wallet</button>
      </header>

      {/* Main content */}
      <main className="main">
        <div className="order-card">
          <h1 className="order-title">Welcome to Flwy Frame</h1>
          <p className="order-sub">
            Your Farcaster mini-app with custom graphics ✨
          </p>
        </div>

        {context && (
          <div className="order-card">
            <h2 className="order-title">Frame Context</h2>
            <pre className="order-sub">
              {JSON.stringify(context, null, 2)}
            </pre>
          </div>
        )}
      </main>

      {/* Bottom navigation */}
      <nav className="bottom-nav">
        <button className="nav-btn active">🏠 Home</button>
        <button className="nav-btn">⭐ Explore</button>
        <button className="nav-btn">⚙️ Settings</button>
      </nav>

      {/* Particles background */}
      <div className="particles">
        <div
          className="particle"
          style={{ width: "8px", height: "8px", top: "50%", left: "20%" }}
        ></div>
        <div
          className="particle"
          style={{ width: "12px", height: "12px", top: "70%", left: "60%" }}
        ></div>
      </div>
    </div>
  );
}