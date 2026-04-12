import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "SpaceEdu — Follow Every Mission. Understand Every Moment.",
  description:
    "Track Artemis, lunar exploration, crewed spaceflight, and mission knowledge through a premium interactive learning interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="page-shell">
          <div className="ambient ambient-1" />
          <div className="ambient ambient-2" />
          <div className="ambient ambient-3" />
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  );
}
