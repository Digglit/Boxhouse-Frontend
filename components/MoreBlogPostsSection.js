import Link from "next/link";
import styles from "../styles/BlogOverview.module.css";
import placeholderImage from "../public/placeholderImage.jpg";
import placeholderImage2 from "../public/placeholderImage2.jpg";
import placeholderImage3 from "../public/placeholderImage3.jpg";
import dateFormatter from "../util/dateFormatter";

const MoreBlogPostsSection = ({ posts, containerStyles = "" }) => {
  const images = [placeholderImage, placeholderImage2, placeholderImage3];
  return (
    <div className={`${containerStyles} md:py-[25px] box-border`}>
      <h2 className={styles.oldPostsTitle}>Older Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={`BlogPostsRoutes - ${post.Slug}`}>
            <Link
              href={`/blog/${post.Slug}`}
              className={styles.blogPostLinkWrapper}
            >
              <div className={styles.blogPostWrapper}>
                <div className={styles.blogPostContentWrapper}>
                  {/* <h3 className={styles.blogPostHeader}>What Are Progressive Web Apps?</h3> */}
                  <h3 className={styles.blogPostHeader}>{post.Title}</h3>
                  <p className={styles.blogPostMeta}>
                    {post.Author} -{" "}
                    {dateFormatter(post.DateWritten, "mm/dd/yyyy")}
                  </p>
                  <p className={styles.blogPostText}>
                    {post.BlogContent[0].Body}
                  </p>
                </div>
                <img
                  className={styles.blogPostImage}
                  src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT}${post.Image.data.attributes.url}`}
                  alt={post.Image.data.attributes.alternativeText}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreBlogPostsSection;
