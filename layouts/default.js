import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

const Layout = ({ children }) => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-MDB259RN" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
