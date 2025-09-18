import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndieCorn Landing Page",
  description: "Building the future, one indie project at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
