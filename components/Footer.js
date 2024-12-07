import styles from "./Footer.module.css";
import Logo from "../public/boxhouse-wordmark.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Image
        src={Logo.src}
        className={styles.footerLogo}
        alt={"Boxhouse Logo"}
        height={50}
        width={160}
      />
      <div className={styles.footerContentWrapper}>
        <div className={styles.footerContactWrapper}>
          <h2 className={"m-0 text-xl font-semibold text-white"}>Contact</h2>
          <p
            className={
              "m-0 grid grid-flow-col items-center justify-items-center gap-2 text-sm text-white"
            }
          >
            <FontAwesomeIcon
              icon={faPhone}
              aria-label="email"
              className="h-4 w-4"
            />{" "}
            216-423-5924
          </p>
          <p
            className={
              "m-0 grid grid-flow-col items-center justify-items-center gap-2 text-sm text-white"
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
          <Link className={styles.footerLink} href="/sitemap.xml">
            Site Map
          </Link>
        </nav>
        <div className={styles.footerHoursWrapper}>
          <h2 className={"m-0 text-xl font-semibold text-white"}>Hours</h2>
          <p className={styles.footerText}>Monday - Saturday: 8AM - 5PM EST</p>
        </div>
      </div>
      <p className={styles.copyrightText}>© Boxhouse Consulting, 2024</p>
    </footer>
  );
};

export default Footer;
