// app/layout.js
"use client";
import "../styles/globals.css"; // Import global styles here
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MDB259RN" />
      <body className={`${roboto.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
