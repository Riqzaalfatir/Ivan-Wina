import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Noto_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "You are invited to our special day",

  icons: {
    icon: "/favicon.ico", 
  },

  openGraph: {
    title: "Wedding Invitation",
    description: "You are invited to our special day",
    url: "https://ivan-wina.vercel.app/",
    images: [
      {
        url: "https://ivan-wina.vercel.app/images/hero/Prewed2.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} ${geistSans.variable} ${geistMono.variable} ${notoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}