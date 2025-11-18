import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerala 4 Nights • 5 Days - Premium Small-Group Escapes",
  description: "Experience authentic Kerala with local guides. Houseboat nights, Munnar tea hills, and curated comfort for small groups (12-15).",
  keywords: "Kerala tour, small group travel, Kerala backwaters, Munnar, houseboat, authentic travel",
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
