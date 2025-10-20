import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Форум — Как сделать клип/мультик через ИИ",
  description: "Воркшоп: как сделать полноценный клип/мультик через ИИ. 4 спикера, практический мастер-класс, нетворкинг и кейс-ревью.",
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
