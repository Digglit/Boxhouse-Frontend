import serverEndpoint from "../utils/serverEndpoint";
import getBlogSlugs from "../graphql/getBlogSlugs.gql";
import { print } from "graphql";

export default async function sitemap() {
  // Static URLs
  const myUrls = ["", "/ourWork", "/about", "/blog", "/scheduleConsultation"];
  const staticUrls = myUrls.map((url) => ({
    url: `https://boxhouseconsulting.com${url}`,
    lastModified: new Date().toISOString(),
  }));

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

  const blogPosts = result.data.blogposts;
  const blogPostPaths = blogPosts.map((post) => ({
    url: `https://boxhouseconsulting.com/blog/${post.Slug}`,
    lastModified: new Date(post.DateWritten).toISOString(),
  }));

  // Combine static and dynamic URLs
  return [...staticUrls, ...blogPostPaths];
}
