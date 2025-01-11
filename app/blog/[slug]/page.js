import Link from "next/link";
import MoreBlogPostsSection from "../../../components/Blog/MoreBlogPostsSection";
import CaseStudyConsultFooter from "../../../components/CaseStudyConsultFooter";
import dateFormatter from "../../../utils/dateFormatter";
import Image from "next/image";
import fetchBlogFromSlug from "../../../utils/fetchBlogFromSlug";
import serverEndpoint from "../../../utils/serverEndpoint";
import getBlogSlugs from "../../../graphql/getBlogSlugs.gql";
import { print } from "graphql";
import ReactMarkdown from "react-markdown";
import formatLongDate from "../../../utils/formatLongDate";
import "../../../styles/blogPostMarkdown.css";

export async function generateStaticParams() {
  const response = await fetch(`${serverEndpoint}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: print(getBlogSlugs) }),
  });

  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to fetch slugs for blog posts");
  }

  const result = await response.json();
  const slugs = result.data.blogposts.data.map((post) => ({
    slug: post.attributes.Slug,
  }));

  return slugs;
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  const postData = await fetchBlogFromSlug(slug);

  return (
    <div className="flex-1 pt-[100px]">
      {/* Post Content Wrapper */}

      <div className="m-auto w-[90%] max-w-[870px]">
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
        <h1 className="text-2xl font-bold">{postData.Title}</h1>
        <p className="mb-4 text-sm">
          {formatLongDate(postData.DateWritten)} | {postData.Author}
        </p>
        <div className="blogPostMarkdownWrapper">
          <ReactMarkdown>{postData.BlogContent}</ReactMarkdown>
        </div>
        <div className="my-[60px] grid grid-flow-row items-center justify-items-center gap-y-[25px] bg-[var(--background-color)] py-[50px] shadow-primary-shadow">
          <h2 className="text-2xl text-white md:text-3xl">
            Let Us Give You A Hand
          </h2>
          <Link href="/scheduleConsultation">
            <button className="primaryButton">
              Schedule a Free Consultation
            </button>
          </Link>
        </div>
        {/* <Link href="/blog">
          <button className="primaryButton mb-8 !px-[60px]">
            Back to Blog
          </button>
        </Link> */}
      </div>
      {/* End Post Content Wrapper */}
    </div>
  );
};

export default BlogPost;
