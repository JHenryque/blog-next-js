import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// }) className={`${geistSans.variable} ${geistMono.variable} antialiased`};

export const metadata: Metadata = {
  title: "The Blog - Este e um blog con Next.js",
  description: "Este e um blog con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>Header</header>

        <main>{children}</main>

        <footer>Footer</footer>
      </body>
    </html>
  );
}
