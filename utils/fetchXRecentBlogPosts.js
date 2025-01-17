import serverEndpoint from "./serverEndpoint";
import getXLatestBlogPosts from "../graphql/getXLatestBlogPosts.gql";
import { print } from "graphql";

const fetchXRecentBlogPosts = async (amount) => {
  try {
    const body = {
      query: print(getXLatestBlogPosts),
      variables: {
        amount: amount,
      },
    };

    const fetchParamData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${serverEndpoint}/graphql`, fetchParamData);
    const fetchData = await response.json();
    return fetchData.data.blogposts;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchXRecentBlogPosts;
