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
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <main className="main">
      <h1 className="text-3xl font-bold mb-4">🚀 Flwy Frame</h1>
      <p className="mb-6">Welcome to your Farcaster mini-app!</p>

      {context && (
        <div className="order-card">
          <h2 className="order-title">Frame Context</h2>
          <pre className="order-sub">{JSON.stringify(context, null, 2)}</pre>
        </div>
      )}
    </main>
  );
} 