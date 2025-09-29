"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

// Import components
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import BottomNav from "../components/BottomNav";
import StarBackground from "../components/StarBackground";

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
    <div className="relative min-h-screen">
      {/* Background */}
      <StarBackground />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="main">
        <OrderCard
          title="Your Orders"
          subtitle="Track and manage all your orders here ✨"
          emoji="📦"
        />

        {context && (
          <OrderCard
            title="Frame Context"
            subtitle={
              <pre className="text-xs whitespace-pre-wrap break-words">
                {JSON.stringify(context, null, 2)}
              </pre>
            }
            emoji="🪐"
          />
        )}
      </main>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}