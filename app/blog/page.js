import MoreBlogPostsSection from "../../components/Blog/MoreBlogPostsSection";
import postsQuery from "../../graphql/getBlogFromSlug.gql";
import { print } from "graphql";
import PrimaryBlogElement from "../../components/Blog/PrimaryBlogElement";
import SecondaryBlogElement from "../../components/Blog/SecondaryBlogElement";
import NoPostsMainContent from "../../components/Blog/NoPostsMainContent";
import PlaceholderBlogElement from "../../components/Blog/PlaceholderBlogElement";
import Image from "next/image";
import HiringFreelancerImage from "../../public/HiringFreelancersBlogImage.jpeg";
import EmailSignupImage from "../../public/BlogEmailSignupImage.jpeg";
import EmailListSignupForm from "../../components/Blog/EmailListSignupForm";
import Link from "next/link";

export const metadata = {
  title: "Blog",
};

const Blog = async (props, ref) => {
  // let blogPosts;

  // try {
  //   const response = await fetch(
  //     `${
  //       process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
  //         ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
  //         : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
  //     }/graphql`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         query: print(postsQuery),
  //       }),
  //     }
  //   );
  //   const fetchData = await response.json();
  //   blogPosts = fetchData.data.blogposts.data;
  // } catch (error) {
  //   blogPosts = error;
  // }

  // console.log(blogPosts);

  // console.log(blogPosts.length);

  const SecondaryBlog = ({ text }) => {
    return (
      <div className="grid h-[100%] grid-cols-[100px_1fr] bg-white shadow-primary-shadow md:grid-cols-[auto_1fr]">
        <div className="bg-gray-200 md:aspect-square" />
        <div className="self-center p-4">
          <div className="border-l-[2px] border-l-[#004bfa8e] pl-2">
            <h2 className="mb-1 text-[18px] font-bold opacity-40">{text}</h2>
            <div className="h-[18px] w-[100%] max-w-[200px] bg-gray-200" />
          </div>
          <div className="mb-1 mt-3 h-[18px] w-[100%] bg-gray-200" />
          <div className="h-[18px] w-[100%] bg-gray-200" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 bg-[--background-color] pt-[125px] md:pt-[150px]">
      <div className="m-auto grid w-[calc(95%-32px)] max-w-[1200px] grid-flow-row gap-x-8 gap-y-6 pb-[100px] md:grid-cols-[40%_calc(60%-32px)] md:grid-rows-[auto_1fr]">
        <h1 className="col-start-1 text-[28px] font-medium text-white md:col-end-3">
          Boxhouse Blog
        </h1>
        <div className="bg-white shadow-primary-shadow">
          <div className="relative h-[200px] w-[100%]">
            <Image
              src={HiringFreelancerImage}
              alt="Hiring Freelancers"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                aspectRatio: "16/9",
              }}
            />
          </div>
          <div className="px-4 py-5">
            <div className="border-l-[2px] border-l-[#004BFA] pl-2">
              <h2 className="text-[20px] font-bold">
                How To Hire Rockstar Freelancers
              </h2>
              <p className="text-[14px] opacity-60">
                January 1, 2025 | Joseph Marella
              </p>
            </div>
            <p className="pb-5 pt-4 text-[14px]">
              Tired of doing everything yourself? Ready to grow your business
              with the help of an expert? This article will introduce you three
              top freelancing platforms, Upwork, Fiverr, and Toptal and teach
              you everything you need to hire a rockstar.
            </p>
            <Link href="/blog/how-to-hire-rockstar-freelancers">
              <button className="primaryButton w-[200px]">Read More</button>
            </Link>
          </div>
        </div>
        <div className="grid-row-3 grid gap-y-6">
          <SecondaryBlog text="Post Coming Soon..." />
          <SecondaryBlog text="Insights Underway..." />
          <SecondaryBlog text="Breakthroughs Developing..." />
        </div>
      </div>
      <div className="bg-[#f7f7f7]">
        <div className="m-auto grid w-[90%] max-w-[500px] grid-rows-[250px_1fr] gap-x-8 py-[60px] md:max-w-[1300px] md:grid-cols-2 md:grid-rows-1 md:py-[100px]">
          <div className="col-start-1 pt-[40px] md:py-[70px]">
            <h2 className="text-[24px] font-medium">Complexity Simplified</h2>
            <p className="my-4 max-w-[475px]">
              Let&apos;s be honest: there&apos;s no shortage of email lists out
              there. But if you&apos;re tired of the fluff, enjoy our content,
              and just want insights that <strong>save time</strong> and{" "}
              <strong>drive growth</strong>, this one&apos;s for you.
              <br />
              <br />
              Join our list to get need-to-know updates delivered fresh to your
              inbox—simple, strategic, and worth it.
            </p>
            <EmailListSignupForm />
          </div>
          <div className="relative row-start-1 h-[100%] w-[100%] md:col-start-2">
            <Image
              src={EmailSignupImage}
              alt="Email Signup"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                aspectRatio: "16/9",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
