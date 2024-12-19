import "../styles/globals.css"; // Import global styles here
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.boxhouseconsulting.com"),
  title: {
    default: "Boxhouse Consulting | Custom Web Software Solutions",
    template: "%s | Boxhouse Consulting",
  },
  description:
    "Unlocking business potential by driving growth through custom web software solutions.",
  openGraph: {
    title: "Boxhouse Consulting | Custom Web Software Solutions",
    description:
      "Unlocking business potential by driving growth through custom web software solutions.",
    url: "https://www.BoxhouseConsulting.com",
    siteName: "Boxhouse Consulting",
    images: [
      {
        url: "/BoxhouseLogo.jpg",
        width: 1200,
        height: 630,
        alt: "Boxhouse Consulting Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boxhouse Consulting | Custom Web Software Solutions",
    description:
      "Unlocking business potential by driving growth through custom web software solutions.",
    images: ["/BoxhouseLogo.jpg"],
  },
};

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
