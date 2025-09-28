import { useEffect, useState } from 'react';
import StarBackground from './StarBackground';

export default function Header({ onConnect }) {
  return (
    <header className="header container" style={{ position: 'relative', zIndex: 20 }}>
      <div className="logo">
        {/* لوگو: لینک رو خودت میدی */}
        <img src="https://your-logo-link.com" alt="Flwy logo" style={{ width:36, height:36, borderRadius:8 }} />
        <div>
          <div style={{fontSize:14, fontWeight:700}}>Flwy…!</div>
          <div style={{fontSize:12, color:'#9B9B9B'}}>Mini App</div>
        </div>
      </div>

      <button className="wallet-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="white" style={{ width:18, height:18 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12H7.5M3 7.5A2.25 2.25 0 015.25 5.25h13.5A2.25 2.25 0 0121 7.5v9a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16.5v-9z" />
        </svg>
        Connect Wallet
      </button>
    </header>
  );
}