import { QEURY_ALL_POSTS } from "@/data/posts";
import { IPost } from "@/interfaces";
import { request } from "graphql-request";

interface Posts {posts: {nodes : IPost[]}}

const getPreviewPosts = async (): Promise<Posts> => {
  const res = await request(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL!,
    QEURY_ALL_POSTS
  );

  return res;
};

export default getPreviewPosts;
