import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amber Brew Café — Handcrafted Coffee & Community",
  description:
    "Experience the warmth of Amber Brew — specialty coffee, artisan pastries, and a cozy atmosphere in the heart of the city.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-amber-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
