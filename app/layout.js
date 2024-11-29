// app/layout.js
"use client";
import "../styles/globals.css"; // Import global styles here
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ApolloProvider client={client}>{children}</ApolloProvider>
        <Footer />
      </body>
    </html>
  );
}
