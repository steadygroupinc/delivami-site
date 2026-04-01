import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit" 
});
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant" 
});

export const metadata: Metadata = {
  title: "Delivami — Client delivery platform for creatives",
  description: "Send your work. Get approval. Get paid. All in one link.",
};

import { PHProvider } from "@/providers/PostHogProvider";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable} antialiased bg-navy overflow-x-hidden flex flex-col min-h-screen`}>
        <PHProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </PHProvider>
      </body>
    </html>
  );
}
