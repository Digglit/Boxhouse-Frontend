import Logo from "../public/boxhouse-wordmark.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const MobileBurgerMenu = ({ selectedLink, toggleMenu }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        toggleMenu();
      }
    });
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 700) {
          toggleMenu();
        }
      });
    };
  });

  return (
    <>
      <motion.div
        className={
          "fixed z-1 top-0 left-0 w-[100%] h-[100vh] bg-black bg-opacity-50"
        }
        onClick={toggleMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className={"bg-white fixed z-10 top-0 left-0 h-[300px] w-[100%] grid"}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-0 right-0 p-5"
          aria-label="Close hamburger menu"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faX} className="text-lg h-4 w-4" />
        </button>
        <Link
          onClick={toggleMenu}
          href="/"
          className="inline-block w-fit justify-self-center"
        >
          <Image
            src={Logo.src}
            className={"mt-3"}
            height={40}
            width={128}
            alt={"Boxhouse Logo"}
          />
        </Link>
        <Link
          onClick={toggleMenu}
          href="/"
          className={"grid justify-items-center"}
        >
          <span
            className={selectedLink === 0 ? "!text-black bold" : "!text-black"}
          >
            Home
          </span>
        </Link>
        <Link
          onClick={toggleMenu}
          href="/ourWork"
          className={"grid justify-items-center"}
        >
          <span
            className={selectedLink === 1 ? "!text-black bold" : "!text-black"}
          >
            Our Work
          </span>
        </Link>
        <Link
          onClick={toggleMenu}
          href="/about"
          className={"grid justify-items-center"}
        >
          <span
            className={selectedLink === 2 ? "!text-black bold" : "!text-black"}
          >
            About Us
          </span>
        </Link>
        <Link
          onClick={toggleMenu}
          href="/blog"
          className={"grid justify-items-center"}
        >
          <span
            className={selectedLink === 3 ? "!text-black bold" : "!text-black"}
          >
            Blog
          </span>
        </Link>
        <Link
          onClick={toggleMenu}
          href="/scheduleConsultation"
          className={"justify-self-center"}
        >
          <button className="primaryButton">
            Schedule a Free Consultation
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default MobileBurgerMenu;
