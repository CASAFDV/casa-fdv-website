import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CASA FDV | Iglesia Fuente de la Vida",
  description: "Iglesia Fuente de la Vida - Una comunidad de fe donde fluye el amor de Dios. Conoce nuestra misión, visión, pastoras y ministerios. Únete a nuestra comunidad de fe.",
  keywords: ["CASA FDV", "Iglesia Fuente de la Vida", "Iglesia Cristiana", "Fe", "Dios", "Jesús", "Espíritu Santo", "Ministerio", "Predicaciones", "Discipulado"],
  authors: [{ name: "CASA FDV - Iglesia Fuente de la Vida" }],
  icons: {
    icon: "/images/logo-fdv.png",
  },
  openGraph: {
    title: "CASA FDV | Iglesia Fuente de la Vida",
    description: "Una comunidad de fe donde fluye el amor de Dios a través de los colores del Pacto.",
    url: "https://casafdv.org",
    siteName: "CASA FDV - Iglesia Fuente de la Vida",
    type: "website",
    images: [
      {
        url: "/images/logo-fdv.png",
        width: 1024,
        height: 1024,
        alt: "CASA FDV Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CASA FDV | Iglesia Fuente de la Vida",
    description: "Una comunidad de fe donde fluye el amor de Dios",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
