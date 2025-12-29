import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Grande Narrative | MMXRPG & Metaverse Engine",
  description: "The Grande Narrative is an immersive Massively Multiplayer Extended Reality Role-Playing Game (MMXRPG) that fuses worldbuilding, automation, and ownership into a living, evolving simulation of a post-scarcity future. Enter Dimension GG4.261T, choose your faction, and shape your destiny.",
  keywords: ["The Grande Narrative", "MMXRPG", "Metaverse", "Web3 Gaming", "NFT", "DAO", "Factions", "The Gulag", "The Utility Company", "Roleplay", "Simulation", "Post-Scarcity"],
  authors: [{ name: "The Utility Company" }],
  creator: "The Utility Company",
  publisher: "The Utility Company",
  metadataBase: new URL('https://thegrandenarrative.com'),
  openGraph: {
    title: "The Grande Narrative | Enter the Simulation",
    description: "An immersive MMXRPG where worldbuilding, automation, and ownership collide. Choose your faction. Shape your destiny. Welcome to Dimension GG4.261T.",
    type: "website",
    locale: "en_US",
    siteName: "The Grande Narrative",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grande Narrative | MMXRPG",
    description: "Enter Dimension GG4.261T. Choose your faction. Shape the future through worldbuilding, automation, and true digital ownership.",
    creator: "@The_Utility_Co",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#2ec7b5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
