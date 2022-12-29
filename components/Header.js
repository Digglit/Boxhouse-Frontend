import Link from 'next/link'
import styles from './Header.module.css'
import Logo from '../public/boxhouse-wordmark.svg'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const [headerClassName, setHeaderClassName] = useState(styles.headerContainer)
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setHeaderClassName(styles.scrolledHeaderContainer)
      } else {
        setHeaderClassName(styles.headerContainer)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setSelectedLink(getSelectedLink())
  }, [router.pathname])

  return (
    <header className={headerClassName}>
      <Link href="/" style={{display: 'inline-block', width: 'fit-content'}}>
        <img src={Logo.src} className={styles.headerLogo}/>
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
    </header>
  )
}

export default Header