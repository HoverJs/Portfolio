import type { Metadata } from "next";
import { Press_Start_2P, VT323, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["vietnamese", "latin"],
  display: "swap",
});

const shareTech = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lethien.dev | Retro RPG Fullstack Developer Portfolio",
  description: "A retro pixel-art RPG style personal portfolio website for Lethien.dev (Le Thien), Creative Fullstack Web Developer.",
  keywords: ["Lethien.dev", "Le Thien", "Fullstack Developer", "Portfolio", "Retro RPG", "Pixel Art Website", "Next.js 15", "React Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${pressStart.variable} ${vt323.variable} ${shareTech.variable} antialiased bg-[#050510] text-[#FFFFFF]`}
      >
        {children}
      </body>
    </html>
  );
}
