"use client";

import { useEffect, useState, useCallback } from "react";
import sdk, { type FrameContext } from "@farcaster/frame-sdk";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { config } from "~/components/providers/WagmiProvider";

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext>();

  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

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

  if (!isSDKLoaded) return <div>Loading...</div>;

  return (
    <div className="w-[300px] mx-auto py-4 px-2">
      <h1 className="text-2xl font-bold text-center mb-4">Flwy Frame App 🚀</h1>

      <div className="mb-4">
        <h2 className="font-bold">Context</h2>
        <pre className="text-xs bg-gray-100 p-2 rounded">
          {JSON.stringify(context, null, 2)}
        </pre>
      </div>

      <div>
        <h2 className="font-bold">Wallet</h2>
        {address && <p>Connected: {address}</p>}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() =>
            isConnected
              ? disconnect()
              : connect({ connector: config.connectors[0] })
          }
        >
          {isConnected ? "Disconnect" : "Connect"}
        </button>
      </div>
    </div>
  );
}