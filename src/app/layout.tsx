import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://indiecorn.xyz'),
  title: "Indiecorn",
  description: "Indiecorn is a startup studio empowering indie founders to build the next generation of unicorns. We provide AI-powered tools, resources, and community for solo entrepreneurs.",
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
    title: "Indiecorn",
    description: "Indiecorn is a startup studio empowering indie founders to build the next generation of unicorns. We provide AI-powered tools, resources, and community for solo entrepreneurs.",
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
    title: "Indiecorn 🦄",
    description: "Startup studio empowering indie founders to build unicorns. AI-powered tools, resources, and community. #Indiecorn #StartupStudio",
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
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Indiecorn",
              "alternateName": "IndieCorn",
              "description": "Startup studio for indie founders building the next generation of unicorns",
              "url": "https://indiecorn.xyz",
              "logo": "https://indiecorn.xyz/logo.svg",
              "founder": {
                "@type": "Person",
                "name": "Shashank Jagannatham"
              },
              "foundingDate": "2024",
              "keywords": "Indiecorn, startup studio, indie founders, AI-powered development, solo entrepreneurs",
              "sameAs": [
                "https://twitter.com/jagannathamshashank",
                "https://youtube.com/@indiecorn.xyz",
                "https://instagram.com/indiecorn.xyz"
              ],
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Indiecorn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Indiecorn is a startup studio that empowers indie founders to build the next generation of unicorns. We provide AI-powered tools, resources, and community support for solo entrepreneurs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the difference between Indiecorn and Indicorn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Indiecorn (with 'e') is our startup studio brand focused on indie founders. Indicorn (without 'e') is a different entity. We are Indiecorn - the startup studio for indie founders."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
