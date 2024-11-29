import Link from "next/link";
import styles from "../../styles/BlogOverview.module.css";
import dateFormatter from "../../utils/dateFormatter";
import Image from "next/image";

const MoreBlogPostsSection = ({ posts, containerStyles = "" }) => {
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
                <div className="relative h-[150px] [@media(max-width:900px)]:row-start-1">
                  <Image
                    src={`${
                      process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
                        ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
                        : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
                    }${post.Image.data.attributes.url}`}
                    alt={post.Image.data.attributes.alternativeText}
                    fill
                    style={{
                      layout: "fill",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    sizes={"(max-width: 900px) 100vw, 250px"}
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreBlogPostsSection;
