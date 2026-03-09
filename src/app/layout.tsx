import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Delivami — Client delivery platform for creatives",
  description: "Send your work. Get approval. Get paid. All in one link.",
};

import { PHProvider } from "@/providers/PostHogProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-navy overflow-x-hidden`}>
        <PHProvider>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
