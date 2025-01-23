import Image from "next/image";
import EmailSignupImage from "../../public/BlogEmailSignupImage.jpeg";
import EmailListSignupForm from "../../components/Blog/EmailListSignupForm";
import fetchXRecentBlogPosts from "../../utils/fetchXRecentBlogPosts";
import HeroSecondaryPostElement from "../../components/Blog/HeroSecondaryPostElement";
import HeroSecondaryPostPlaceholderElement from "../../components/Blog/HeroSecondaryPostPlaceholderElement";
import HeroPrimaryPostElement from "../../components/Blog/HeroPrimaryPostElement";

export const metadata = {
  title: "Blog",
};

const Blog = async () => {
  const blogPosts = await fetchXRecentBlogPosts();

  const placeholderBlogs = [
    "Post Coming Soon...",
    "Insights Underway...",
    "Breakthroughs Developing...",
  ];

  const secondaryBlogPosts = blogPosts.slice(1, 4);

  const placeholderBlogsSpliced = placeholderBlogs.splice(
    (blogPosts.length || 1) - 1,
    4,
  );

  return (
    <div className="flex-1 bg-[--background-color] pt-[75px] md:pt-[150px]">
      <div className="m-auto grid w-[calc(95%-32px)] max-w-[1200px] grid-flow-row gap-x-8 gap-y-6 pb-[50px] md:grid-cols-[40%_calc(60%-32px)] md:grid-rows-[auto_1fr] md:pb-[100px]">
        <h1 className="col-start-1 text-[28px] font-medium text-white md:col-end-3">
          Boxhouse Blog
        </h1>
        <HeroPrimaryPostElement post={blogPosts[0]} />
        <div className="grid-row-3 grid gap-y-6">
          {secondaryBlogPosts.map((post) => (
            <HeroSecondaryPostElement
              key={`Secondary Blog Post - ID: ${post.documentId}`}
              post={post}
            />
          ))}
          {placeholderBlogsSpliced.map((text, index) => (
            <HeroSecondaryPostPlaceholderElement
              key={`Placeholder Blog Post - ${text}`}
              text={text}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#f7f7f7]">
        <div className="m-auto grid w-[90%] max-w-[500px] grid-rows-[250px_1fr] gap-x-8 py-[60px] md:max-w-[1300px] md:grid-cols-2 md:grid-rows-1 md:py-[100px]">
          <div className="col-start-1 pt-[40px] md:py-[70px]">
            <h2 className="text-[24px] font-medium">Complexity Simplified</h2>
            <p className="my-4 max-w-[475px]">
              Let&apos;s be honest: there are no shortage of email lists out
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
