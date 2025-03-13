import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({ subsets: ["hebrew"], weight: ["300", "500", "700"] });

export const metadata: Metadata = {
  title: "Smart Pergola Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${heebo.className} antialiased`}>{children}</body>
    </html>
  );
}
