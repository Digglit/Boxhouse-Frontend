import getBlogFromSlug from "../graphql/getBlogFromSlug.gql";
import { print } from "graphql";
import serverEndpoint from "./serverEndpoint";

const fetchBlogFromSlug = async (slug) => {
  try {
    const postDataResponse = await fetch(`${serverEndpoint}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(getBlogFromSlug),
        variables: { slug: slug },
      }),
    });

    const postDataParsedJSON = await postDataResponse.json();
    return postDataParsedJSON.data.blogposts[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchBlogFromSlug;
