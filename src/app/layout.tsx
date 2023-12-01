import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fira_Sans, Oswald } from "next/font/google";

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

// const allRoundGothic = localFont({
//   src: "./../../public/fonts/AllRoundGothic-Medium.woff2",
//   variable: "--font-all-round-gothic",
// });
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
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
