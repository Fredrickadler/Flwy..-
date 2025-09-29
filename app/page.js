"use client";

import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">🚀 Fwly..!</h1>
      <p className="mb-6">Welcome to your Farcaster mini-app!</p>
      <div className="bg-gray-800 p-4 rounded text-sm max-w-xs text-left">
        <h2 className="font-semibold mb-2">Frame Context</h2>
        <p className="text-gray-400">(context data will show here)</p>
      </div>
    </main>
  );
}