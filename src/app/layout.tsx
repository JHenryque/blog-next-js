import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Headers from "@/components/Headers";
import { Footer } from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// }) className={`${geistSans.variable} ${geistMono.variable} antialiased`};

export const metadata: Metadata = {
  title: {
    default: "The Blog - Este e um blog con Next.js",
    template: "%s | The Blog",
  },
  description: "Este e um blog con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className="text-slate-900 bg-slate-400 min-h-screen dark:bg-slate-900 dark:text-slate-50">
        <Container>
          <Headers />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
