// app/layout.js
"use client";
import "../styles/globals.css"; // Import global styles here
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex min-h-screen flex-col`}>
        <Header />
        <ApolloProvider client={client}>
          <main className="flex flex-1">{children}</main>
        </ApolloProvider>
        <Footer />
      </body>
    </html>
  );
}
