import { request, gql } from "graphql-request";

const getPreviewPosts = async (limit: number = 20) => {
  const res = await request(
    "http://awbgbali2023.local/graphql",
    gql`
      query PostsPreview {
        posts(first: ${limit}, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            id
            title
            excerpt
            slug
            date
            isSticky
            categories {
              nodes {
                id
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `
  );

  return res;
};

export default getPreviewPosts;
