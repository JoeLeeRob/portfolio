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
        <header className="py-16 px-24 relative">
          <div className="hero-image-wrapper">
            <Image
              src='/images/joe_profile_blk.jpg'
              alt='Joe Robinson profile picture'
              layout='fill'
              objectFit="cover"
            />
          </div>
          <div className="flex items-center gap-16">
            <div className="flex gap-4 items-center">
              <Image
                src='/images/jr-logo.svg'
                alt='Joseph Robinson Logo'
                width={75}
                height={75}
              />
            </div>
            <ul className="flex gap-8 text-xl">
              <li>link1</li>
              <li>link2</li>
              <li>link3</li>
              <li>link4</li>
            </ul>
          </div>
          <div className="relative flex flex-col justify-center p-24">
            <p className={`${orbitron.className} text-[5rem] leading-[5.5rem]`}><span className="line-through">Joseph</span></p>
            <p className={`${orbitron.className} text-[10rem] leading-[11rem]`}>Robinson</p>
            <span className={`${reenieBeanie.className} absolute text-9xl top-[5%] left-[30%] transform rotate-[340deg]`}>Joe</span>
          </div>
          {/* <blockquote><p>"Code is like humor. When you have to explain it, it's bad" -Cory House</p></blockquote> */}
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
