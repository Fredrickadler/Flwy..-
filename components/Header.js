import { useEffect, useState } from 'react';
import StarBackground from './StarBackground';

export default function Header({ onConnect }) {
  const [addr, setAddr] = useState(null);

  useEffect(() => {
    // If app runs inside Warpcast Frame it may inject window.sdk
    if (window?.sdk?.wallet?.ethProvider) {
      // optionally auto read address if available via sdk.context
    }
  }, []);

  async function handleConnect() {
    if (window.sdk?.wallet?.ethProvider) {
      try {
        await window.sdk.actions.ready();
        const provider = new (await import('ethers')).ethers.BrowserProvider(window.sdk.wallet.ethProvider);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAddr(address);
        if (onConnect) onConnect({ provider, signer, address });
      } catch (err) {
        console.error('Connect failed', err);
      }
    } else {
      alert('Please open this mini app inside Warpcast / Farcaster Frames to connect wallet.');
    }
  }

  function disconnect() {
    setAddr(null);
    if (onConnect) onConnect(null);
  }

  return (
    <>
      <StarBackground count={90}/>
      <header className="header container" style={{ position: 'relative', zIndex: 20 }}>
        <div className="logo">
          <img src="/avatar-svgrepo.svg" alt="logo" style={{ width:36, height:36, borderRadius:8 }} />
          <div>
            <div style={{fontSize:14, fontWeight:700}}>Farcaster Followers</div>
            <div style={{fontSize:12, color:'#9B9B9B'}}>Mini App</div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'center', gap:12}}>
          {addr ? (
            <>
              <div className="wallet-address" onClick={disconnect} style={{display:'inline-block'}}>
                {addr.slice(0,6)}...{addr.slice(-4)}
              </div>
            </>
          ) : (
            <button className="wallet-btn" onClick={handleConnect}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{filter:'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'}}>
                <path d="M2 7C2 5.895 2.895 5 4 5H20C21.105 5 22 5.895 22 7V17C22 18.105 21.105 19 20 19H4C2.895 19 2 18.105 2 17V7Z" fill="#fff" opacity="0.06"/>
                <path d="M3 9H21" stroke="#FFF" strokeOpacity="0.06" strokeWidth="1.2"/>
                <path d="M6 11C6 12.1046 6.89543 13 8 13H16C17.1046 13 18 12.1046 18 11" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Connect Wallet
            </button>
          )}
        </div>
      </header>
    </>
  );
}