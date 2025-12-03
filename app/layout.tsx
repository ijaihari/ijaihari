// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// Google Font
const inter = Inter({
  subsets: ["latin"],
});

// Optional if you want dark/light theme later
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Layout Component (TSX)
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
