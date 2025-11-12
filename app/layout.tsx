import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: 'variable'
});

export const metadata: Metadata = {
  title: "FoodWagen",
  description: "Discover meals near you with Foodwagen.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
