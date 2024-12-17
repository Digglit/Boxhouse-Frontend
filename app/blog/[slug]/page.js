// import { useRouter } from 'next/router'
import Link from "next/link";
import MoreBlogPostsSection from "../../../components/Blog/MoreBlogPostsSection";
import CaseStudyConsultFooter from "../../../components/CaseStudyConsultFooter";
import { print } from "graphql";
import postsQuery from "../../../graphql/getBlogPosts.gql";
import dateFormatter from "../../../utils/dateFormatter";
import readingTime from "reading-time";
import Image from "next/image";

export async function generateStaticParams() {
  const graphqlQuery = `
    query GetAllSlugs {
      blogposts {
        data {
          attributes {
            Slug
          }
        }
      }
    }
  `;

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
      body: JSON.stringify({ query: graphqlQuery }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch slugs for blog posts");
  }

  const result = await response.json();
  const slugs = result.data.blogposts.data.map((post) => ({
    slug: post.attributes.Slug,
  }));

  return slugs;
}

const fetchPostData = async (slug) => {
  const postDataResponse = await fetch(
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
        variables: { slugEq: slug },
      }),
    },
  );

  const postDataParsedJSON = await postDataResponse.json();
  return postDataParsedJSON.data.blogposts.data[0].attributes;
};

const fetchMoreBlogPosts = async () => {
  const moreBlogPostsResponse = await fetch(
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
        variables: {
          page: 1,
          pageSize: 3,
        },
      }),
    },
  );

  const moreBlogPostsFetchData = await moreBlogPostsResponse.json();
  return moreBlogPostsFetchData.data.blogposts.data;
};

const BlogPost = async ({ params }) => {
  const { slug } = await params;

  const postData = await fetchPostData(slug);
  const moreBlogPosts = await fetchMoreBlogPosts();

  const stringifiedBlogData = postData.BlogContent.map((contentSection) =>
    contentSection.Body.split("\\n").join(" "),
  ).join(" ");

  const { minutes } = readingTime(stringifiedBlogData);
  // ->
  // stats: {
  //   text: '1 min read',
  //   minutes: 1,
  //   time: 60000,
  //   words: 200
  // }

  return (
    <div className="pt-[100px]">
      {/* Post Content Wrapper */}

      <div className="m-auto w-[90%] max-w-[768px]">
        <Link href="/blog">
          <button className="primaryButton mb-8 !px-[60px]">
            Back to Blog
          </button>
        </Link>
        <div className="relative mb-[30px] h-[150px] shadow-xl md:h-[250px]">
          <Image
            src={`${
              process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
                ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
                : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
            }${postData.Image.data.attributes.url}`}
            alt={postData.Image.data.attributes.alternativeText}
            fill
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
            }}
            sizes={"(max-width: 900px) 100vw, 768px"}
            priority
          />
        </div>
        <h1 className="text-2xl md:text-3xl">{postData.Title}</h1>
        <p className="text-sm">
          {postData.Author} -{" "}
          {dateFormatter(postData.DateWritten, "mm/dd/yyyy")} | Read Time:
          {` ${Math.ceil(minutes)}`} Minutes
        </p>
        {postData.BlogContent.map((contentSection, index) => (
          <div
            className="mt-8"
            key={`${contentSection.Header} - contentSections - ${index}`}
          >
            {contentSection.Header !== null && (
              <div className="mb-[20px] grid grid-cols-[10px_1fr] items-center">
                <div className="mr-[5px] h-[30px] w-[3px] bg-[#004BFA]" />
                <h2 className="text-xl font-medium md:text-2xl">
                  {contentSection.Header}
                </h2>
              </div>
            )}
            {contentSection.Body.split("\\n").map((paragraph, index) => (
              <>
                {paragraph === "" && <br />}
                {paragraph !== "" && (
                  <p className="whitespace-pre-line text-sm" key={index}>
                    {paragraph}
                  </p>
                )}
              </>
            ))}
            {/* <p className="text-sm whitespace-pre-line">{contentSection.Body}</p> */}
            {/* {contentSection.note && (
              <p className="text-sm mt-8">{contentSection.note}</p>
            )} */}
          </div>
        ))}
        <CaseStudyConsultFooter />
        <MoreBlogPostsSection
          posts={moreBlogPosts.map((post) => post.attributes)}
        />
        <Link href="/blog">
          <button className="primaryButton mb-4 !px-[60px]">
            Back to Blog
          </button>
        </Link>
      </div>
      {/* End Post Content Wrapper */}
    </div>
  );
};

export default BlogPost;
