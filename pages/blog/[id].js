// import { useRouter } from 'next/router'
import Head from "next/head";
import Link from "next/link";
import blogPosts from "../../public/blogPosts.json";
import MoreBlogPostsSection from "../../components/MoreBlogPostsSection";
import CaseStudyConsultFooter from "../../components/CaseStudyConsultFooter";
import BlogHeaderImage from "../../public/placeholderImage.jpg";
import { useQuery } from "@apollo/client";
import postsQuery from "../../graphql/getBlogPosts.gql";
import { useRouter } from "next/router";
import dateFormatter from "../../util/dateFormatter";
import readingTime from "reading-time";

const BlogPost = ({ blogData }) => {
  // Get the current slug from the router
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const {
    loading: postLoading,
    error: postError,
    data: postData,
  } = useQuery(postsQuery, { variables: { slugEq: id } });

  const { loading, error, data } = useQuery(postsQuery, {
    variables: { page: 1, pageSize: 3, slugNe: id },
  });

  if (loading || postLoading) {
    return <div>Loading...</div>;
  }
  const { blogposts } = data;
  const finalBlogposts = blogposts.data.map((post) => post.attributes);
  console.log(postData, data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error occurred: {error.message}</div>;
  }

  console.log(finalBlogposts);
  console.log(postData);
  let finalBlogData = postData.blogposts.data[0].attributes;

  const stringifiedBlogData = finalBlogData.BlogContent.map((contentSection) =>
    contentSection.Body.split("\\n").join(" ")
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
      <Head>
        <title>{finalBlogData.Title}</title>
      </Head>

      {/* Post Content Wrapper */}

      <div className="m-auto w-[90%] max-w-[768px]">
        <Link href="/blog">
          <button className="primaryButton mb-8 !px-[60px]">
            Back to Blog
          </button>
        </Link>
        <img
          src={`${
            process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
              ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
              : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
          }${finalBlogData.Image.data.attributes.url}`}
          className="h-[150px] md:h-[250px] w-[100%] object-cover mb-[30px] shadow-xl"
          alt={finalBlogData.Image.data.attributes.alternativeText}
        />
        <h1 className="text-2xl md:text-3xl">{finalBlogData.Title}</h1>
        <p className="text-sm">
          {finalBlogData.Author} -{" "}
          {dateFormatter(finalBlogData.DateWritten, "mm/dd/yyyy")} | Read Time:
          {` ${Math.ceil(minutes)}`} Minutes
        </p>
        {finalBlogData.BlogContent.map((contentSection, index) => (
          <div
            className="mt-8"
            key={`${contentSection.Header} - contentSections - ${index}`}
          >
            {contentSection.Header !== null && (
              <div className="grid grid-cols-[10px_1fr] items-center mb-[20px]">
                <div className="w-[3px] h-[30px] bg-[#004BFA] mr-[5px]" />
                <h2 className="text-xl md:text-2xl font-medium">
                  {contentSection.Header}
                </h2>
              </div>
            )}
            {contentSection.Body.split("\\n").map((paragraph, index) => (
              <>
                {paragraph === "" && <br />}
                {paragraph !== "" && (
                  <p className="text-sm whitespace-pre-line" key={index}>
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
        <MoreBlogPostsSection posts={finalBlogposts} />
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
