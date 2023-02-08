import { gql } from "graphql-request";

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    categories {
      edges {
        node {
          id
          name
        }
      }
    }
    tags {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export const QEURY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query PostsPreview {
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        ...PostFields
        isSticky
      }
    }
  }
`;

export const QEURY_POST_BY_SLUG = gql`
  ${POST_FIELDS}
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ...PostFields
      content
    }

    posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        ...PostFields
      }
    }
  }
`;
