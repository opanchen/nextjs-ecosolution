import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fira_Sans, Oswald } from "next/font/google";

import { Footer, Header } from "@components/layout";

import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const firaSans = Fira_Sans({
  weight: ["400", "300"],
  subsets: ["latin"],
  variable: "--font-fira-sans",
});

const allRoundGothic = localFont({
  src: "./../../public/fonts/Fontspring-DEMO-AllRoundGothic-Medium.otf",
  variable: "--font-all-round-gothic",
});

const saygon = localFont({
  src: "./../../public/fonts/CASaygon-Regular.woff2",
  variable: "--font-saygon",
});

export const metadata: Metadata = {
  title: "Ecosolution",
  description: "Renewable energy for any task",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  manifest: "/meta/site.webmanifest",
  keywords:
    "Ecology, Non-polluting energy sources, Power generation, Nature, Ukraine",
  openGraph: {
    title: "Ecosolution",
    description: "Renewable energy for any task",
    siteName: "Ecosolution",
    locale: "en-US",
    images: [
      {
        url: "/meta/ogp-image.jpg",
        width: 1034,
        height: 436,
        alt: "Ecosolution. Renewable energy for any task",
      },
    ],
    url: process.env.NEXT_PUBLIC_BASE_URL as string,
  },
  icons: {
    icon: [
      {
        url: "/meta/favicon.ico",
      },
      {
        url: "/meta/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/meta/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/meta/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/meta/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/meta/favicon.ico",
    apple: "/meta/apple-touch-icon.png",
    other: {
      rel: "/meta/apple-touch-icon.png",
      url: "/meta/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${allRoundGothic.className} ${saygon.className} ${firaSans.variable}`}
      >
        <Header />
        <main className="bg-white-primary text-green-primary">{children}</main>
        <Footer />

        <div id="menu" />
      </body>
    </html>
  );
}
