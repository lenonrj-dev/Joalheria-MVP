import type { Metadata } from "next";
import "./globals.css";

import ShopProvider from "../components/shop/ShopProvider";

export const metadata: Metadata = {
  title: "LUME — Joalheria MVP",
  description: "Brilhe com joias minimalistas e elegantes — demo de e-commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-black antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
