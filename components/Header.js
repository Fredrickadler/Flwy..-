import { useEffect, useState } from 'react';
import StarBackground from './StarBackground';

export default function Header() {
  return (
    <header className="header container" style={{ position: "relative", zIndex: 20 }}>
      <div className="logo">
        <img
          src="https://i.postimg.cc/q0z6Frjc/EEE329-E2-AFE6-4655-A643-C0171-EA8-F3-F0.png"
          alt="Flwy logo"
          style={{ width: 36, height: 36, borderRadius: 8 }}
        />
        <div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Flwy…!</div>
          <div style={{ fontSize: 12, color: "#9B9B9B" }}>Mini App</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Wallet Button with fa-wallet SVG */}
        <button className="wallet-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ width: '20px', height: '20px', fill: 'currentColor' }}
          >
            <path d="M448 96H80c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c8.8 0 16-7.2 16-16v-80h-48c-17.7 0-32-14.3-32-32s14.3-32 32-32h48V144c0-8.8-7.2-16-16-16zm-64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z"/>
          </svg>
          Connect Wallet
        </button>

        {/* Profile Button with fa-user SVG */}
        <button className="profile-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ width: '20px', height: '20px', fill: 'currentColor' }}
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32H128.2c-70.7 0-128 57.3-128 128 0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32 0-70.7-57.3-128-128-128z"/>
          </svg>
          Profile
        </button>
      </div>
    </header>
  );
}