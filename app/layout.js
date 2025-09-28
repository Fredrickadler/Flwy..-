import "./globals.css";

export const metadata = {
  title: "Flwy Frame",
  description: "A Farcaster Frame App",
  icons: {
    icon: "/icon.png", // باید فایل icon.png رو توی public بذاری
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* متای لازم برای Farcaster Frame */}
        <meta
          name="fc:frame"
          content='{
            "version":"next",
            "imageUrl":"https://flwy.vercel.app/preview.png",
            "button":{
              "title":"Open Flwy",
              "action":{
                "type":"launch_frame",
                "name":"Flwy",
                "url":"https://flwy.vercel.app",
                "splashImageUrl":"https://flwy.vercel.app/splash.png",
                "splashBackgroundColor":"#000000"
              }
            }
          }'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}