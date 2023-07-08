import Link from 'next/link'
import styles from './Header.module.css'
import Logo from '../public/boxhouse-wordmark.svg'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MobileBurgerMenu from './MobileBurgerMenu'
import { AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const router = useRouter()

  const getSelectedLink = () => {
    const path = router.pathname
    if (path === '/') {
      return 0
    } else if (path === '/ourWork') {
      return 1
    } else if (path === '/about') {
      return 2
    } else if (path === '/blog') {
      return 3
    } else {
      return 4
    }
  }

  const [selectedLink, setSelectedLink] = useState(getSelectedLink())

  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    if (router.pathname.includes('/ourWork/') || router.pathname.includes('/blog/')) {
      setScrolled(true);
    } else {
      window.addEventListener('scroll', handleScroll)
      setScrolled(false);
    }
    setSelectedLink(getSelectedLink())
    return () => window.removeEventListener('scroll', handleScroll)
  }, [router.pathname])

  const toggleBurgerMenu = (e) => {
    e.stopPropagation()
    if (!burgerMenuOpen) {
      setBurgerMenuOpen(true)
    } else {
      setBurgerMenuOpen(false)
    }
  }

  return (
    <header className={scrolled ? styles.scrolledHeaderContainer : styles.headerContainer}>
      <Link href="/" style={{display: 'inline-block', width: 'fit-content'}}>
        <img src={Logo.src} className={styles.headerLogo} alt={"Boxhouse Logo"}/>
      </Link>
      <Link href="/" className={styles.linkContainer}>
        <span className={selectedLink === 0 ? styles.selectedLink : null}>Home</span>
      </Link>
      <Link href="/ourWork" className={styles.linkContainer}>
        <span className={selectedLink === 1 ? styles.selectedLink : null}>Our Work</span>
      </Link>
      <Link href="/about" className={styles.linkContainer}>
        <span className={selectedLink === 2 ? styles.selectedLink : null}>About Us</span>
      </Link>
      <Link href="/blog" className={styles.linkContainer}>
        <span className={selectedLink === 3 ? styles.selectedLink : null}>Blog</span>
      </Link>
      <Link href="/scheduleConsultation" className={styles.linkContainer}>
        <button className='primaryButton'>Schedule a Consultation</button>
      </Link>
      <button aria-label="Expand Navigation Menu" className={styles.burgerButton} onClick={toggleBurgerMenu}>
        <div className={scrolled ? styles.scrolledBurgerIcon : styles.burgerIcon} />
      </button>
      <AnimatePresence mode="wait">
        {burgerMenuOpen &&
          <MobileBurgerMenu
            selectedLink={selectedLink}
            toggleMenu={toggleBurgerMenu}
            key={'Mobile Burger Menu'}
          />
        }
      </AnimatePresence>
    </header>
  )
}

export default Header