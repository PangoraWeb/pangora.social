import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Providers from "./providers";
import MovingBackground from "@/components/MovingBackground";
import ConstellationParticles from "@/components/ConstellationParticles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pangora.Social",
  description: "A fediverse compatible forum and link aggregator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>
        <Providers>
          <div className="relative">
            <MovingBackground />
            <ConstellationParticles />
            <div className="absolute w-full h-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
