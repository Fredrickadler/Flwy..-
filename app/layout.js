import "../styles/globals.css";

export const metadata = {
  title: "Flwy Frame",
  description: "A Farcaster Mini App with custom graphics",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}