import Image from "next/image";
import Link from "next/link";
import dateFormatter from "../../utils/dateFormatter";
import styles from "../../styles/BlogOverview.module.css";

const SecondaryBlogElement = ({ blogPost }) => {
  return (
    <Link
      href={`/blog/${blogPost.attributes.Slug}`}
      className={styles.latestBlogSecondaryLinkWrapper}
    >
      <div className={styles.latestBlogSecondaryContainer}>
        <div className="relative w-[100%]">
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
            sizes={"15vw"}
          />
        </div>
        <div className={styles.latestBlogSecondaryContentWrapper}>
          <h3 className={styles.latestBlogSecondaryHeader}>
            {blogPost.attributes.Title}
          </h3>
          <p className={styles.latestBlogSecondaryMeta}>
            {blogPost.attributes.Author} -{" "}
            {dateFormatter(blogPost.attributes.DateWritten, "mm/dd/yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SecondaryBlogElement;
