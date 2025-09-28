import '../styles/globals.css';

export const metadata = {
  title: 'Farcaster Mini App',
  description: 'Follow-orders mini app — collect USDC tips in pool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}