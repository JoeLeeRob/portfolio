import type { Metadata } from "next";
import localFont from "next/font/local";
import { Reenie_Beanie, Orbitron } from 'next/font/google'
import Image from "next/image";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const reenieBeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Joe Robinson",
  description: "This is my professional portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="py-8 px-24">
          <div className="flex items-center gap-16">
            <img className="h-[75px] aspect-square" src="/images/jr-logo.svg" alt="Joseph Robinson Logo" />
            <ul className="flex gap-8 text-xl">
              <li>link1</li>
              <li>link2</li>
              <li>link3</li>
              <li>link4</li>
            </ul>
          </div>
        </header>
        <div>
          {children}
        </div>
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
