import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";
import CodeSigningInjeciton from "@/components/CodeSigningInjection";
import { Providers } from './providers';

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "RevivoX",
  description:
    "Laptops reacondicionadas en Montevideo, Uruguay",
  keywords: [
    "venta de laptops",
    "laptops usadas",
    "laptops en Montevideo",
    "laptops en Uruguay",
    "laptops en Montevideo",
    "laptops usadas en Montevideo",
    "laptops reacondicionadas",
    "laptops baratas",
    "laptops baratas en Montevideo",
    "laptops baratas en Uruguay",
    "laptops baratas en Montevideo",
    "laptops baratas usadas",
    "laptops baratas usadas en Montevideo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(lato.className, "antialiased")}>
        <Providers>
          {children}
        </Providers>
        <CodeSigningInjeciton />
      </body>
    </html>
  );
}
