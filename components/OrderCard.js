export default function OrderCard({ accountName = "StellarAlice", accountId = "@stellar.alice", onFollow }) {
  return (
    <div className="order-card">
      <div className="order-title" style={{ padding: "0 12px" }}>{accountName}</div>
      <div className="order-sub" style={{ padding: "0 12px" }}>
        Follow this account ({accountId}). After you follow, the system will automatically add a coin to your balance.
      </div>
      <div style={{ marginTop: 10, padding: "0 12px" }}>
        <button className="follow-btn" onClick={() => onFollow && onFollow(accountId)}>
          {/* آیکون پروفایل */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" style={{ width:18, height:18 }}>
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32H128.2c-70.7 0-128 
            57.3-128 128 0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 
            32-32 0-70.7-57.3-128-128-128z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}