import Head from "next/head";
import MoreBlogPostsSection from "../../components/Blog/MoreBlogPostsSection";
import postsQuery from "../../graphql/getBlogPosts.gql";
import { print } from "graphql";
import PrimaryBlogElement from "../../components/Blog/PrimaryBlogElement";
import SecondaryBlogElement from "../../components/Blog/SecondaryBlogElement";

const Blog = async (props, ref) => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
        ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
        : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
    }/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(postsQuery),
      }),
    }
  );

  const fetchData = await response.json();
  const blogPosts = fetchData.data.blogposts.data;

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

        <div className="grid grid-cols-1 grid-rows-[repeat(4,auto)] md:grid-cols-[40%_60%] md:grid-rows-3 gap-[20px] md:w-[calc(100%-20px)] mt-4">
          <PrimaryBlogElement blogPost={blogPosts[0]} />
          <SecondaryBlogElement blogPost={blogPosts[1]} />
          <SecondaryBlogElement blogPost={blogPosts[2]} />
          <SecondaryBlogElement blogPost={blogPosts[3]} />
        </div>
      </div>
      {/* {!postsLoading && !postsQueryError && ( */}
      <MoreBlogPostsSection
        posts={blogPosts.map((post) => post.attributes).slice(4)}
        containerStyles={"px-[25px] md:px-[75px] pt-[50px]"}
      />
      {/* )} */}
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
