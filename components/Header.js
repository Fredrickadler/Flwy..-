import { useEffect, useState } from 'react';
import StarBackground from './StarBackground';

export default function Header() {
  return (
    <header className="header container" style={{ position: "relative", zIndex: 20 }}>
      <div className="logo">
        <img src="https://i.postimg.cc/sDC2BkF1/EEE329-E2-AFE6-4655-A643-C0171-EA8-F3-F0.png" alt="Flwy logo" style={{ width:36, height:36, borderRadius:8 }} />
        <div>
          <div style={{ fontSize:14, fontWeight:700 }}>Flwy…!</div>
          <div style={{ fontSize:12, color:"#9B9B9B" }}>Mini App</div>
        </div>
      </div>

      <button className="wallet-btn">
        {/* Wallet Icon fa-wallet */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" style={{ width:20, height:20 }}>
          <path d="M448 96H80c-26.5 0-48 21.5-48 48v224c0 
          26.5 21.5 48 48 48h352c8.8 0 16-7.2 
          16-16v-80h-48c-17.7 0-32-14.3-32-32s14.3-32 
          32-32h48V144c0-8.8-7.2-16-16-16zm-64 
          208c0 8.8-7.2 16-16 16s-16-7.2-16-16 
          7.2-16 16-16 16 7.2 16 16z"/>
        </svg>
        Connect Wallet
      </button>
    </header>
  );
}