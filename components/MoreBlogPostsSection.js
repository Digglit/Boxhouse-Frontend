import Link from "next/link";
import styles from '../styles/BlogOverview.module.css';
import placeholderImage from '../public/placeholderImage.jpg';
import placeholderImage2 from '../public/placeholderImage2.jpg';
import placeholderImage3 from '../public/placeholderImage3.jpg';

const MoreBlogPostsSection = ({ posts }) => {
  const images = [placeholderImage, placeholderImage2, placeholderImage3];
  return(
    <div className={styles.oldBlogPostsWrapper}>
      <h2 className={styles.oldPostsTitle}>Older Posts</h2>
      <ul>
        {posts.map((props) => (
          <li key={`BlogPostsRoutes - ${props.id}`}>
            <Link href={`/blog/${props.slug}`} className={styles.blogPostLinkWrapper}>
              <div className={styles.blogPostWrapper}>
                <div className={styles.blogPostContentWrapper}>
                  {/* <h3 className={styles.blogPostHeader}>What Are Progressive Web Apps?</h3> */}
                  <h3 className={styles.blogPostHeader}>{props.title}</h3>
                  <p className={styles.blogPostMeta}>{props.author} - {props.date}</p>
                  <p className={styles.blogPostText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquam aliquam, nisl nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl. Sed euismod, nisl sit amet aliquam aliquam, nisl nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl.</p>
                </div>
                <img className={styles.blogPostImage} src={images[props.id - 1].src} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoreBlogPostsSection;