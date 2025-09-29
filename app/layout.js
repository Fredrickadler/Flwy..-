import "./globals.css";

export const metadata = {
  title: "Fwly..!",
  description: "Farcaster Mini App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}