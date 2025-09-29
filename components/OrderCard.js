export default function OrderCard({ title, subtitle, emoji }) {
  return (
    <div className="order-card">
      <div className="order-title">
        {emoji} {title}
      </div>
      <div className="order-sub">{subtitle}</div>
    </div>
  );
}