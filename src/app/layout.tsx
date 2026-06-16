import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fernandes Import — Sua loja Apple Premium em Praia Brava",
  description:
    "Venda de produtos Apple premium e assistência técnica especializada em Itajaí, SC. iPhone, MacBook, iPad, AirPods e muito mais.",
  keywords: "Apple, iPhone, MacBook, iPad, AirPods, assistência técnica, Itajaí, Praia Brava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
