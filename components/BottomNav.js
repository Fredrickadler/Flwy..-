export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="nav-btn active">
        <span>🏠 Home</span>
      </button>
      <button className="nav-btn">
        <span>📦 Orders</span>
      </button>
      <button className="nav-btn">
        <span>⚙️ Settings</span>
      </button>
    </nav>
  );
}