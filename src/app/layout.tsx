import type { Metadata } from "next";
import { Inter, Poppins, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ["latin"], variable: "--font-poppins" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Dolphin Mobile | Premium Mobiles & Electronics",
  description: "Explore the latest smartphones, accessories, monitors, CPUs, and home electronics with trusted quality and affordable pricing. Serving since 2011.",
  keywords: "electronics, smartphones, mobiles, parametru, Ramanathapuram, Tamil Nadu, Dolphin Mobile, Apple Store, Samsung Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} ${sora.variable} antialiased bg-dolphin-900 text-slate-100 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
