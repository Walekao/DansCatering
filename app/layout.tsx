import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-day-picker/dist/style.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dan's Legacy Catering - Dignity on a Budget",
  description:
    "World-class catering for non-profits and community organizations. 100% of proceeds fund job training for local youth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

