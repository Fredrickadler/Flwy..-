export default function BottomNav({ active = 'home', onNavigate }) {
  return (
    <div className="bottom-nav" role="navigation" aria-label="bottom navigation">
      <button className={`nav-btn ${active === 'home' ? 'active' : ''}`} onClick={() => onNavigate && onNavigate('home')}>Home</button>
      <button className={`nav-btn ${active === 'orders' ? 'active' : ''}`} onClick={() => onNavigate && onNavigate('orders')}>Orders</button>
    </div>
  );
}