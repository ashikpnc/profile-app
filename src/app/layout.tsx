import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ashikDev",
  description: "Self taught software engineer by passion and profession!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className={inter.className}>
        <div className="grid-container">
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
