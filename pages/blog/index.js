import Link from 'next/link';
import styles from '../../styles/BlogOverview.module.css';
import placeholderImage from '../../public/placeholderImage.jpg';
import placeholderImage2 from '../../public/placeholderImage2.jpg';
import placeholderImage3 from '../../public/placeholderImage3.jpg';
import Head from 'next/head';
import PageTransition from '../../components/PageTransition';
import MoreBlogPostsSection from '../../components/MoreBlogPostsSection';

const Blog = (props, ref) => {
  return (
    <>
      <div className='pageHeaderContainer'>
        <Head>
          <title>Blog</title>
          <meta name="description" content="Boxhouse Consulting is a for-hire software team specializing in web-based application development" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#FFFFFE" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Boxhouse Blog</h1>
        <input className={styles.searchInput} type='text' placeholder='Search...' />
        <div className={styles.latestBlogsWrapper}>
          <Link href="/" className={styles.latestBlogPrimaryLinkWrapper}>
            <div className={styles.latestBlogPrimaryContainer}>
              <img className={styles.latestBlogPrimaryImage} src={placeholderImage.src} />
              <div className={styles.latestBlogPrimaryContentWrapper}>
                <h3 className={styles.latestBlogPrimaryHeader}>What is JAMSTACK?</h3>
                <p className={styles.latestBlogPrimaryMeta}>Joseph Marella - October 19th, 2022</p>
                <p className={styles.latestBlogPrimaryText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquam aliquam, nisl nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl. Sed euismod, nisl sit amet aliquam aliquam, nisl nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl.</p>
              </div>
            </div>
          </Link>
          <Link href="/" className={styles.latestBlogSecondaryLinkWrapper}>
            <div className={styles.latestBlogSecondaryContainer}>
              <img className={styles.latestBlogSecondaryImage} src={placeholderImage2.src} />
              <div className={styles.latestBlogSecondaryContentWrapper}>
                <h3 className={styles.latestBlogSecondaryHeader}>What Are Progressive Web Apps?</h3>
                <p className={styles.latestBlogSecondaryMeta}>Joseph Marella - October 19th, 2022</p>
              </div>
            </div>
          </Link>
          <Link href="/" className={styles.latestBlogSecondaryLinkWrapper}>
            <div className={styles.latestBlogSecondaryContainer}>
              <img className={styles.latestBlogSecondaryImage} src={placeholderImage3.src} />
              <div className={styles.latestBlogSecondaryContentWrapper}>
                <h3 className={styles.latestBlogSecondaryHeader}>Case Study: Applications of Three.js</h3>
                <p className={styles.latestBlogSecondaryMeta}>Joseph Marella - October 19th, 2022</p>
              </div>
            </div>
          </Link>
          <Link href="/" className={styles.latestBlogSecondaryLinkWrapper}>
            <div className={styles.latestBlogSecondaryContainer}>
              <img className={styles.latestBlogSecondaryImage} src={placeholderImage.src} />
              <div className={styles.latestBlogSecondaryContentWrapper}>
                <h3 className={styles.latestBlogSecondaryHeader}>GPT-4: The future of Artificial Intelligence</h3>
                <p className={styles.latestBlogSecondaryMeta}>Joseph Marella - October 19th, 2022</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <MoreBlogPostsSection posts={props.posts} />
    </>
  )
}

export async function getStaticProps() {
  // Fetch the list of routes from the API
  const res = await fetch('http://localhost:3000/blogPosts.json')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog