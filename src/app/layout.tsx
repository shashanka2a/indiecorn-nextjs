import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://indiecorn.xyz'),
  title: "IndieCorn - Building the Future, One Indie Project at a Time",
  description: "Indie maker building innovative solutions for campus life and startups. Explore Kampus.fun, Markit.one, and Layr.plus - tools designed to empower the next generation of creators.",
  keywords: [
    "indie maker",
    "startup tools",
    "campus life",
    "student commerce",
    "ride sharing",
    "SaaS tools",
    "entrepreneur",
    "tech innovation",
    "Kampus.fun",
    "Markit.one",
    "Layr.plus"
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
    title: "IndieCorn - Building the Future, One Indie Project at a Time",
    description: "Indie maker building innovative solutions for campus life and startups. Explore Kampus.fun, Markit.one, and Layr.plus - tools designed to empower the next generation of creators.",
    siteName: "IndieCorn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IndieCorn - Building the Future, One Indie Project at a Time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndieCorn - Building the Future, One Indie Project at a Time",
    description: "Indie maker building innovative solutions for campus life and startups. Explore Kampus.fun, Markit.one, and Layr.plus.",
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
