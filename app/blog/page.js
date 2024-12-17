import MoreBlogPostsSection from "../../components/Blog/MoreBlogPostsSection";
import postsQuery from "../../graphql/getBlogPosts.gql";
import { print } from "graphql";
import PrimaryBlogElement from "../../components/Blog/PrimaryBlogElement";
import SecondaryBlogElement from "../../components/Blog/SecondaryBlogElement";
import NoPostsMainContent from "../../components/Blog/NoPostsMainContent";
import PlaceholderBlogElement from "../../components/Blog/PlaceholderBlogElement";

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

  return (
    <>
      <div className="flex-1 bg-[--background-color] pb-[50px] pt-[125px] md:pt-[150px]">
        <div className="grid max-w-[100%] grid-cols-[100%] items-center gap-[40px] px-[20px] md:grid-cols-[45%_calc(55%-40px)] md:px-[40px] xl:grid-cols-[50%_calc(50%-100px)] xl:gap-[100px] xl:px-[100px]">
          <NoPostsMainContent />
          <div className="hidden w-[100%] gap-4 md:grid">
            <PlaceholderBlogElement />
            <PlaceholderBlogElement />
            <PlaceholderBlogElement />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
