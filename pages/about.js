import styles from '../styles/AboutUs.module.css'
import JosephJPG from '../public/Joseph-Primary-Small.jpg'
import Link from 'next/link'
import SnowBackdrop from '../components/SnowBackdrop'
import PageTransition from '../components/PageTransition'
import Head from 'next/head'

const About = (props, ref) => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Boxhouse Consulting is a for-hire software team specializing in web-based application development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='pageHeaderContainer'>
        {/* <SnowBackdrop factor={4} opacity={0.4}/> */}
        <h1>About Us</h1>
      </div>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContentWrapper}>
          <h2 className={styles.contentTextTitle}>The Boxhouse Checklist</h2>
          <ul className={styles.checklist}>
            {/* <li>
              <h3 className={styles.checklistItemTitle}>Less Stress, More Success</h3>
              <p className={styles.checklistItemText}>Clients come to us because they want less problems and better results. We work hard to understand the needs of our clients and build them products that they can't wait to show their friends, family, and, most importantly, their customers.</p>
            </li> */}
            <li>
              <h3 className={styles.checklistItemTitle}>Future Proof Technology</h3>
              <p className={styles.checklistItemText}>Don&apos;t settle for less than the best. We use industry leading technology, bringing your business to the cutting edge.</p>
            </li>
            <li>
              <h3 className={styles.checklistItemTitle}>Reliability and Consistency</h3>
              <p className={styles.checklistItemText}>One of the things we hear most from our clients is the horror stories of their past software experiences. We strive to build quality relationships with our clients and that starts with showing up every single day.</p>
            </li>
            <li>
              <h3 className={styles.checklistItemTitle}>Top Quality Design</h3>
              <p className={styles.checklistItemText}>Building software that users loves starts with top quality design. We build unique, engaging user interfaces that are intuitive and exciting.</p>
            </li>
          </ul>
          <div className={styles.aboutMeContainer}>
            <img className={styles.aboutMeImage} src={JosephJPG.src}/>
            <div className={styles.aboutMeTextWrapper}>
              <h2 className={styles.aboutMeTitle}>Our Founder</h2>
              <p className={styles.aboutMeText}>Boxhouse Consulting is owned and operated by Joseph Marella, a software developer based out of Akron Ohio. Joseph holds a degree in Computer Science, giving him a strong understanding of the fundamentals of software development.<br /><br />Joseph has spent the last several years leading software development projects for clients all over the country. With diverse project experience in industries like hospitality, Politics and medical education, Joseph is ready to tackle any challenge.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.getStartedContainer}>
        <div className={styles.getStartedContentWrapper}>
          <h2 className={styles.getStartedTitle}>Ready to get started?</h2>
          <div className={styles.getStartedButtonWrapper}>
            {/* <button className='secondaryButton' style={{width: 250, padding: 0}}>View Our Work</button> */}
            <Link href="/scheduleConsultation">
              <button className='primaryButton'>Schedule a Consultation</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About