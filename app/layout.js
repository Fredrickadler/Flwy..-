import "./globals.css";

export const metadata = {
  title: "Fwly..!",
  description: "Farcaster Mini App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}