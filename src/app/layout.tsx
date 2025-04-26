import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";
import CodeSigningInjeciton from "@/components/CodeSigningInjection";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RevivoX",
  description:
    "Open Source Alternative to ShipFast - Launch your startup in days Not in weeks",
  keywords: [
    "saas",
    "boilerplate",
    "open source",
    "free",
    "open source shipfast",
    "shipfree",
    "idee8",
    "made by idee8",
    "free boilerplate",
    "github",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(museoModerno.className, "antialiased")}>
        {children}
        <CodeSigningInjeciton />
      </body>
    </html>
  );
}
