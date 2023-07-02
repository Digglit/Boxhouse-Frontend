import styles from './Footer.module.css'
import Logo from '../public/boxhouse-wordmark.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={Logo.src} className={styles.footerLogo} alt={"Boxhouse Logo"}/>
      <div className={styles.footerContentWrapper}>
        <div className={styles.footerContactWrapper}>
          <h2 className={styles.footerHeader}>Contact</h2>
          <p className={styles.footerText}>Phone: xxx-xxx-xxxx</p>
          <p className={styles.footerText}>Email: Contact@BoxhouseConsulting.com</p>
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
            Schedule a Consultation
          </Link>
          <Link className={styles.footerLink} href="/about">
            About Us
          </Link>
          <Link className={styles.footerLink} href="/">
            Site Map
          </Link>
        </nav>
        <div className={styles.footerHoursWrapper}>
          <h2 className={styles.footerHeader}>Hours</h2>
          <p className={styles.footerText}>Monday - Friday: 9AM - 6PM EST</p>
          <p className={styles.footerText}>Saturday: 9AM - 1PM EST</p>
        </div>
      </div>
      <p className={styles.copyrightText}>© Boxhouse Consulting, 2022</p>
    </footer>
  )
}

export default Footer
