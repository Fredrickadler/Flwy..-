'use client';

import { useState } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import BottomNav from '../components/BottomNav';

export default function HomePage() {
  const [connected, setConnected] = useState(null);
  const [route, setRoute] = useState('home');

  function handleConnect(payload){
    setConnected(payload);
  }

  function handleFollow(accountId) {
    // اینجا تعامل follow واقعی را اضافه می‌کنیم (فقط نمونه)
    // اگر در داخل Farcaster Frame اجرا شود، می‌توان از window.sdk برای انجام follow اتوماتیک استفاده کرد.
    if (!window?.sdk?.wallet?.ethProvider) {
      // اگر در فریم نیستیم به کاربر اطلاع می‌دهیم
      alert('Open in Warpcast / Farcaster frame to perform in-app follow and earn coins.');
      return;
    }
    alert(`Follow action triggered for ${accountId}\n(Inside real frame you would call follow API)`);
  }

  return (
    <>
      <Header onConnect={handleConnect} />
      <main className="main container">
        {route === 'home' && (
          <>
            <OrderCard accountName="StellarAlice" accountId="@stellar.alice" onFollow={handleFollow} />
            <OrderCard accountName="OrbitBob" accountId="@orbit.bob" onFollow={handleFollow} />
            <OrderCard accountName="NovaCrew" accountId="@novacrew" onFollow={handleFollow} />
          </>
        )}

        {route === 'orders' && (
          <div style={{maxWidth:760, width:'100%'}}>
            <h2 style={{fontSize:20, fontWeight:700, marginBottom:12}}>Your Orders</h2>
            <div style={{color:'#9B9B9B'}}>No orders yet — this view will list the follow-orders you created and pool stats.</div>
          </div>
        )}
      </main>

      <BottomNav active={route} onNavigate={setRoute} />
    </>
  );
}