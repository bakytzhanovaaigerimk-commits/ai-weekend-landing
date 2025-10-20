import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI WEEKEND - AI Crew Connect",
  description: "AI WEEKEND для AI Creators. 25-26 октября 2025, г. Астана. Интерактивный формат, игры, нетворкинг.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
