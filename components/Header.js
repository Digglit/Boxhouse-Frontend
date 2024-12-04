"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../public/boxhouse-wordmark.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileBurgerMenu from "./MobileBurgerMenu";
import { AnimatePresence } from "framer-motion";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const pathname = usePathname();

  const getSelectedLink = () => {
    if (pathname === "/") {
      return 0;
    } else if (pathname === "/ourWork") {
      return 1;
    } else if (pathname === "/about") {
      return 2;
    } else if (pathname === "/blog") {
      return 3;
    } else {
      return 4;
    }
  };

  const [selectedLink, setSelectedLink] = useState(getSelectedLink());

  const handleScroll = () => {
    setScrolled(window.scrollY !== 0);
  };

  useEffect(() => {
    if (pathname.includes("/ourWork/") || pathname.includes("/blog/")) {
      setScrolled(true);
    } else {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    setSelectedLink(getSelectedLink());
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleBurgerMenu = (e) => {
    if (e) e.stopPropagation();
    if (!burgerMenuOpen) {
      setBurgerMenuOpen(true);
    } else {
      setBurgerMenuOpen(false);
    }
  };

  return (
    <header
      className={
        scrolled ? styles.scrolledHeaderContainer : styles.headerContainer
      }
    >
      <div className={styles.headerContentWrapper}>
        <Link
          href="/"
          style={{ display: "inline-block", width: "fit-content" }}
        >
          <div className={styles.headerLogoWrapper}>
            <Image
              src={Logo.src}
              className={styles.headerLogo}
              fill
              alt={"Boxhouse Logo"}
            />
          </div>
        </Link>
        <Link href="/" className={styles.linkContainer}>
          <span className={selectedLink === 0 ? styles.selectedLink : null}>
            Home
          </span>
        </Link>
        <Link
          href="/ourWork"
          className={styles.linkContainer}
          onClick={() =>
            sendGTMEvent({
              event: "buttonClicked",
              value: "pageLink - Our Work",
            })
          }
        >
          <span className={selectedLink === 1 ? styles.selectedLink : null}>
            Our Work
          </span>
        </Link>
        <Link href="/about" className={styles.linkContainer}>
          <span className={selectedLink === 2 ? styles.selectedLink : null}>
            About Us
          </span>
        </Link>
        <Link href="/blog" className={styles.linkContainer}>
          <span className={selectedLink === 3 ? styles.selectedLink : null}>
            Blog
          </span>
        </Link>
        <Link href="/scheduleConsultation" className={styles.linkContainer}>
          <button className="primaryButton">
            Schedule a Free Consultation
          </button>
        </Link>
        <button
          aria-label="Expand Navigation Menu"
          className={styles.burgerButton}
          onClick={toggleBurgerMenu}
        >
          <div
            className={scrolled ? styles.scrolledBurgerIcon : styles.burgerIcon}
          />
        </button>
        <AnimatePresence mode="wait">
          {burgerMenuOpen && (
            <MobileBurgerMenu
              selectedLink={selectedLink}
              toggleMenu={toggleBurgerMenu}
              key={"Mobile Burger Menu"}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
