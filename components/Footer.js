import styles from "./Footer.module.css";
import Logo from "../public/boxhouse-wordmark.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={Logo.src} className={styles.footerLogo} alt={"Boxhouse Logo"} />
      <div className={styles.footerContentWrapper}>
        <div className={styles.footerContactWrapper}>
          <h2 className={"m-0 text-white text-xl font-semibold"}>Contact</h2>
          <p
            className={
              "m-0 text-white text-sm grid grid-flow-col gap-2 items-center justify-items-center"
            }
          >
            <FontAwesomeIcon
              icon={faPhone}
              aria-label="email"
              className="h-4 w-4"
            />{" "}
            440-276-1462
          </p>
          <p
            className={
              "m-0 text-white text-sm grid grid-flow-col gap-2 items-center justify-items-center"
            }
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              aria-label="email"
              className="h-4 w-4"
            />{" "}
            Contact@BoxhouseConsulting.com
          </p>
        </div>
        <nav className={styles.footerLinksWrapper}>
          <Link className={styles.footerLink} href="/">
            Home
          </Link>
          <Link className={styles.footerLink} href="/blog">
            Blog
          </Link>
          <Link className={styles.footerLink} href="/ourWork">
            Our Work
          </Link>
          <Link className={styles.footerLink} href="/scheduleConsultation">
            Schedule a Free Consultation
          </Link>
          <Link className={styles.footerLink} href="/about">
            About Us
          </Link>
          <Link className={styles.footerLink} href="/">
            Site Map
          </Link>
        </nav>
        <div className={styles.footerHoursWrapper}>
          <h2 className={"m-0 text-white text-xl font-semibold"}>Hours</h2>
          <p className={styles.footerText}>Monday - Friday: 9AM - 6PM EST</p>
          <p className={styles.footerText}>Saturday: 9AM - 1PM EST</p>
        </div>
      </div>
      <p className={styles.copyrightText}>© Boxhouse Consulting, 2024</p>
    </footer>
  );
};

export default Footer;
