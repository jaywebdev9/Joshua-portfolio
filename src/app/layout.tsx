import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joshua Mwalukimba | Full-Stack Developer",
  description:
    "I build digital solutions that help businesses work smarter — websites, management systems and custom software designed around real operational needs.",
  keywords: [
    "Joshua Mwalukimba",
    "Full-Stack Developer",
    "Tanzania Developer",
    "Web Developer",
    "RetailOS",
    "Business Systems",
  ],
  authors: [{ name: "Joshua Mwalukimba" }],
  openGraph: {
    title: "Joshua Mwalukimba | Full-Stack Developer",
    description:
      "Business websites, management systems and custom software designed around real business needs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
