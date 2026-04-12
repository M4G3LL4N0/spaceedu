import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceEdu — Follow Every Mission. Understand Every Moment.",
  description:
    "Track Artemis, lunar exploration, crewed spaceflight, and major missions through a premium interactive education experience.",
  metadataBase: new URL("https://spaceedu.vercel.app"),
  openGraph: {
    title: "SpaceEdu",
    description:
      "Track Artemis, lunar exploration, crewed spaceflight, and major missions through a premium interactive education experience.",
    url: "https://spaceedu.vercel.app",
    siteName: "SpaceEdu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceEdu",
    description:
      "Follow every mission. Understand every moment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
