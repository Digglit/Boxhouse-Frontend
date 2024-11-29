import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/BlogOverview.module.css";
import dateFormatter from "../../utils/dateFormatter";

const PrimaryBlogElement = ({ blogPost }) => {
  return (
    <Link
      href={`/blog/${blogPost.attributes.Slug}`}
      className={styles.latestBlogPrimaryLinkWrapper}
    >
      <div className={styles.latestBlogPrimaryContainer}>
        <div className="relative">
          <Image
            src={`${
              process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
                ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
                : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
            }${blogPost.attributes.Image.data.attributes.url}`}
            alt={blogPost.attributes.Image.data.attributes.alternativeText}
            fill
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
            }}
            sizes={"(max-width: 900px) 100vw, 50vw"}
            priority
          />
        </div>
        <div className={styles.latestBlogPrimaryContentWrapper}>
          <h3 className={styles.latestBlogPrimaryHeader}>
            {blogPost.attributes.Title}
          </h3>
          <p className={styles.latestBlogPrimaryMeta}>
            {blogPost.attributes.Author} -{" "}
            {dateFormatter(blogPost.attributes.DateWritten, "mm/dd/yyyy")}
          </p>
          <p className={styles.latestBlogPrimaryText}>
            {blogPost.attributes.BlogContent[0].Body}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PrimaryBlogElement;
