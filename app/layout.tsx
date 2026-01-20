import type { Metadata } from "next";
import "./globals.css";

import ShopProvider from "../components/shop/ShopProvider";

export const metadata: Metadata = {
  title: "JOKER — Jewelry Landing",
  description: "Shine Bright With Sustainably Jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
