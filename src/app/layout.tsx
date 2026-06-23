import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martina Canteros | Full-Stack Developer",
  description: "Portfolio de Martina Canteros, desarrolladora Full-Stack",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative overflow-x-hidden`}
      >
        <div className="bg-grain min-h-screen">
          {/* Fondo animado de Shadcn */}
          <div className="shadow-glow"></div>

          <LanguageProvider>
            {/* 👇 AQUÍ ESTÁ EL CAMBIO: agregamos !fixed y !z-[9999] 👇 */}
            <div className="!fixed top-6 right-6 !z-[9999]">
              <LanguageToggle />
            </div>
            
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}