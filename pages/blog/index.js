import Link from 'next/link';
import styles from '../../styles/BlogOverview.module.css';
import placeholderImage from '../../public/placeholderImage.jpg';

const Blog = (props) => {
  return (
    <>
      <div className='pageHeaderContainer'>
        <h1>Boxhouse Blog</h1>
        <input className={styles.searchInput} type='text' placeholder='Search...' />
        <div className={styles.latestBlogsWrapper}>
          <div className={styles.latestBlogPrimaryContainer}>
            <img className={styles.latestBlogPrimaryImage} src={placeholderImage.src} />
          </div>
          <div className={styles.latestBlogSecondaryContainer}>
          </div>
          <div className={styles.latestBlogSecondaryContainer}>
          </div>
          <div className={styles.latestBlogSecondaryContainer}>
          </div>
        </div>
      </div>
      <p>Here are the available routes:</p>
      <ul>
        {props.routes.map((route) => (
          <li key={route}>
            <Link href={`/blog/${route}`}>
              <span>{route}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  // Fetch the list of routes from the API
  const res = await fetch('http://localhost:3000/blogPosts.json')
  const routes = await res.json()

  return {
    props: {
      routes,
    },
  }
}

export default Blog