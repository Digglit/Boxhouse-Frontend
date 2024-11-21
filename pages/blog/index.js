import Link from "next/link";
import styles from "../../styles/BlogOverview.module.css";
import placeholderImage from "../../public/placeholderImage.jpg";
import placeholderImage2 from "../../public/placeholderImage2.jpg";
import placeholderImage3 from "../../public/placeholderImage3.jpg";
import Head from "next/head";
import PageTransition from "../../components/PageTransition";
import MoreBlogPostsSection from "../../components/MoreBlogPostsSection";
import { useQuery } from "@apollo/client";
import postsQuery from "../../graphql/getBlogPosts.gql";
import dateFormatter from "../../util/dateFormatter";

const Blog = (props, ref) => {
  const { loading, error, data } = useQuery(postsQuery);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error occurred: {error.message}</div>;
  }

  const { blogposts } = data;
  const finalBlogposts = blogposts.data.map((post) => post.attributes);
  console.log(finalBlogposts);

  const mappableBlogposts = finalBlogposts.slice(4);

  return (
    <>
      <div className="pageHeaderContainer">
        <Head>
          <title>Blog</title>
          <meta
            name="description"
            content="Boxhouse Consulting is a for-hire software team specializing in web-based application development"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#FFFFFE" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Boxhouse Blog</h1>
        {/* <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
        /> */}
        <div className="grid grid-cols-1 grid-rows-[repeat(4,auto)] md:grid-cols-[40%_60%] md:grid-rows-3 gap-[20px] md:w-[calc(100%-20px)] mt-4">
          <Link
            href={`/blog/${finalBlogposts[0].Slug}`}
            // grid-row-start: 1;
            // grid-row-end: 4;
            // grid-column: 1;
            // color: black;
            // text-decoration: none;
            className={styles.latestBlogPrimaryLinkWrapper}
          >
            <div className={styles.latestBlogPrimaryContainer}>
              <img
                className={styles.latestBlogPrimaryImage}
                src={`${
                  process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
                    ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
                    : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
                }${finalBlogposts[0].Image.data.attributes.url}`}
                alt={finalBlogposts[0].Image.data.attributes.alternativeText}
              />
              <div className={styles.latestBlogPrimaryContentWrapper}>
                <h3 className={styles.latestBlogPrimaryHeader}>
                  {finalBlogposts[0].Title}
                </h3>
                <p className={styles.latestBlogPrimaryMeta}>
                  {finalBlogposts[0].Author} -{" "}
                  {dateFormatter(finalBlogposts[0].DateWritten, "mm/dd/yyyy")}
                </p>
                <p className={styles.latestBlogPrimaryText}>
                  {finalBlogposts[0].BlogContent[0].Body}
                </p>
              </div>
            </div>
          </Link>
          <Link
            href={`/blog/${finalBlogposts[1].Slug}`}
            className={styles.latestBlogSecondaryLinkWrapper}
          >
            <div className={styles.latestBlogSecondaryContainer}>
              <img
                className={styles.latestBlogSecondaryImage}
                src={`${
                  process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
                    ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
                    : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
                }${finalBlogposts[1].Image.data.attributes.url}`}
                alt={finalBlogposts[1].Image.data.attributes.alternativeText}
              />
              <div className={styles.latestBlogSecondaryContentWrapper}>
                <h3 className={styles.latestBlogSecondaryHeader}>
                  {finalBlogposts[1].Title}
                </h3>
                <p className={styles.latestBlogSecondaryMeta}>
                  {finalBlogposts[1].Author} -{" "}
                  {dateFormatter(finalBlogposts[1].DateWritten, "mm/dd/yyyy")}
                </p>
              </div>
            </div>
          </Link>
          <Link
            href={`/blog/${finalBlogposts[2].Slug}`}
            className={styles.latestBlogSecondaryLinkWrapper}
          >
            <div className={styles.latestBlogSecondaryContainer}>
              <img
                className={styles.latestBlogSecondaryImage}
                src={`${
                  process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
                    ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
                    : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
                }${finalBlogposts[2].Image.data.attributes.url}`}
                alt={finalBlogposts[2].Image.data.attributes.alternativeText}
              />
              <div className={styles.latestBlogSecondaryContentWrapper}>
                <h3 className={styles.latestBlogSecondaryHeader}>
                  {finalBlogposts[2].Title}
                </h3>
                <p className={styles.latestBlogSecondaryMeta}>
                  {finalBlogposts[2].Author} -{" "}
                  {dateFormatter(finalBlogposts[2].DateWritten, "mm/dd/yyyy")}
                </p>
              </div>
            </div>
          </Link>
          <Link
            href={`/blog/${finalBlogposts[3].Slug}`}
            className={styles.latestBlogSecondaryLinkWrapper}
          >
            <div className={styles.latestBlogSecondaryContainer}>
              <img
                className={styles.latestBlogSecondaryImage}
                src={`${
                  process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
                    ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
                    : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
                }${finalBlogposts[3].Image.data.attributes.url}`}
                alt={finalBlogposts[3].Image.data.attributes.alternativeText}
              />
              <div className={styles.latestBlogSecondaryContentWrapper}>
                <h3 className={styles.latestBlogSecondaryHeader}>
                  {finalBlogposts[3].Title}
                </h3>
                <p className={styles.latestBlogSecondaryMeta}>
                  {finalBlogposts[3].Author} -{" "}
                  {dateFormatter(finalBlogposts[3].DateWritten, "mm/dd/yyyy")}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <MoreBlogPostsSection
        posts={mappableBlogposts}
        containerStyles={"px-[25px] md:px-[75px] pt-[50px]"}
      />
    </>
  );
};

// export async function getStaticProps() {
//   // Fetch the list of routes from the API
//   const res = await fetch("http://localhost:3000/blogPosts.json");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Blog;
