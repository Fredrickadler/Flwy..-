export default function OrderCard({ accountName = 'star_owner', accountId = '@star_owner', onFollow }) {
  return (
    <div className="order-card">
      <div className="order-avatar">
        {/* استفاده از SVG / تصویر کوچک به جای ایموجی کیبوردی */}
        <img src="/avatar-svgrepo.svg" alt="avatar" />
      </div>

      <div className="order-content">
        <div className="order-title">{accountName}</div>
        <div className="order-sub">
          Follow this account ({accountId}). After you follow, the system will automatically add a coin to your balance.
        </div>

        <div style={{ marginTop: 12 }}>
          <button className="follow-btn" onClick={() => onFollow && onFollow(accountId)}>
            <span style={{fontSize:16}}>✨</span>
            <span style={{marginLeft:6}}>Follow</span>
          </button>
        </div>
      </div>

      <div className="order-side">
        <div className="pill">Pool: 12.34 USDC</div>
        <div className="pill">Followers: 1,240</div>
        <div className="pill">Payout: 0.01 USDC</div>
      </div>
    </div>
  );
}