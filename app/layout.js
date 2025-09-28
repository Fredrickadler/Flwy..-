import "./globals.css";
import dynamic from "next/dynamic";

const WagmiProvider = dynamic(() => import("~/components/providers/WagmiProvider"), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider>{children}</WagmiProvider>
      </body>
    </html>
  );
}