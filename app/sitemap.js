import client from "../apolloClient";
import postsQuery from "../graphql/getBlogPosts.gql";

export default async function sitemap() {
  // Static URLs
  const myUrls = ["", "/ourWork", "/about", "/blog", "/scheduleConsultation"];
  const staticUrls = myUrls.map((url) => ({
    url: `https://boxhouseconsulting.com${url}`,
    lastModified: new Date().toISOString(),
  }));

  // Fetch dynamic blog post data from GraphQL
  const { data } = await client.query({
    query: postsQuery, // Adjust pagination if needed
  });

  // Map blog post data into sitemap format
  const dynamicUrls = data.blogposts.data.map((post) => ({
    url: `https://boxhouseconsulting.com/blog/${post.attributes.Slug}`,
    lastModified: new Date(post.attributes.updatedAt),
  }));

  // Combine static and dynamic URLs
  return [...staticUrls, ...dynamicUrls];
}
