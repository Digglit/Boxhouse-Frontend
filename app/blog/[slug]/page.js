import Link from "next/link";
import Image from "next/image";
import fetchBlogFromSlug from "../../../utils/fetchBlogFromSlug";
import ReactMarkdown from "react-markdown";
import formatLongDate from "../../../utils/formatLongDate";
import "../../../styles/blogPostMarkdown.css";
import getBlogSlugs from "../../../graphql/getBlogSlugs.gql";
import serverEndpoint from "../../../utils/serverEndpoint";
import { print } from "graphql";

export async function generateStaticParams() {
  const response = await fetch(`${serverEndpoint}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: print(getBlogSlugs) }),
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Failed to fetch slugs for blog posts");
  }

  const result = await response.json();
  const slugs = result.data.blogposts.map((post) => ({
    slug: post.Slug,
  }));

  console.log(slugs);

  return slugs;
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  const postData = await fetchBlogFromSlug(slug);

  return (
    <div className="m-auto w-[90%] max-w-[870px] pt-[100px]">
      <Link href="/blog">
        <button className="primaryButton mb-8 !px-[60px]">Back to Blog</button>
      </Link>
      <div className="relative mb-[30px] h-[150px] shadow-xl md:h-[250px]">
        <Image
          src={`${
            process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
              ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
              : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
          }${postData.Image.url}`}
          alt={postData.Image.alternativeText}
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
        <h2 className="text-2xl font-medium text-white md:text-3xl">
          Let Us Give You A Hand
        </h2>
        <Link href="/scheduleConsultation">
          <button className="primaryButton">
            Schedule a Free Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
