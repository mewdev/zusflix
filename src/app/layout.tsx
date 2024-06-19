import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zušflix",
  description: "Online videokatalog videí žáků ZUŠ Frenštát pod Radhoštěm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
