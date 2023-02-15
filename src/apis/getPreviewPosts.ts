import { QEURY_ALL_POSTS } from "@/data/posts";
import { request } from "graphql-request";

const getPreviewPosts = async () => {
  const res = await request(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL!,
    QEURY_ALL_POSTS
  );

  return res;
};

export default getPreviewPosts;
