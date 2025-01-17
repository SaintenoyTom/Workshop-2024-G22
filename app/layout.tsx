import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Curaconnect",
  description: "Votre assistance santé",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
