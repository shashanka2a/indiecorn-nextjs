import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://indiecorn.xyz'),
  title: "IndieCorn - The Next Big Movement in Tech | Indie Today, Unicorn Tomorrow",
  description: "IndieCorn is the new term defining the AI-powered indie developer revolution. One builder, one laptop, one billion-dollar vision. Join the movement that's reshaping how we build the future.",
  keywords: [
    "IndieCorn",
    "indie developer",
    "AI-powered development",
    "solo entrepreneur",
    "indie hacker",
    "startup movement",
    "tech revolution",
    "AI coding",
    "solo founder",
    "indie maker",
    "unicorn startup",
    "tech innovation",
    "AI tools",
    "developer movement",
    "indie tech",
    "solo builder",
    "AI-assisted coding",
    "indie revolution",
    "tech disruption",
    "future of development"
  ],
  authors: [{ name: "Shashank Jagannatham" }],
  creator: "Shashank Jagannatham",
  publisher: "IndieCorn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indiecorn.xyz",
    title: "IndieCorn - The Next Big Movement in Tech | Indie Today, Unicorn Tomorrow",
    description: "IndieCorn is the new term defining the AI-powered indie developer revolution. One builder, one laptop, one billion-dollar vision. Join the movement that's reshaping how we build the future.",
    siteName: "IndieCorn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IndieCorn - The AI-Powered Indie Developer Revolution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndieCorn - The Next Big Movement in Tech 🦄",
    description: "The new term defining the AI-powered indie developer revolution. Indie today, unicorn tomorrow. #IndieCorn #TechRevolution",
    creator: "@jagannathamshashank",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://indiecorn.xyz",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="IndieCorn" />
        <meta name="apple-mobile-web-app-title" content="IndieCorn" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* IndieCorn Movement Meta Tags */}
        <meta name="movement" content="IndieCorn - AI-Powered Indie Developer Revolution" />
        <meta name="trending" content="IndieCorn, indie developer, AI coding, solo entrepreneur" />
        <meta name="hashtag" content="#IndieCorn #TechRevolution #IndieDeveloper #AICoding" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
