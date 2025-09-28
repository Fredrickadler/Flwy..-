export default function OrderCard({ accountName = 'StellarAlice', accountId = '@stellar.alice', onFollow }) {
  return (
    <div className="order-card">
      <div className="order-avatar">
        <img src="https://your-logo-link.com" alt="avatar" />
      </div>

      <div className="order-content">
        <div className="order-title">{accountName}</div>
        <div className="order-sub">
          Follow this account ({accountId}). After you follow, the system will automatically add a coin to your balance.
        </div>

        <div style={{ marginTop: 12 }}>
          <button className="follow-btn" onClick={() => onFollow && onFollow(accountId)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="white" style={{ width:20, height:20 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0M18 9.75h3m-1.5-1.5v3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}