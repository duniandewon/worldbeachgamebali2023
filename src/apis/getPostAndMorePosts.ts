import { request } from "graphql-request";
import { QEURY_POST_BY_SLUG } from "@/data/posts";

const getPostAndMorePosts = async (slug: string | string[] | undefined) => {
  const res = await request(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL!,
    QEURY_POST_BY_SLUG,
    {
      slug,
    }
  );

  return res;
};

export default getPostAndMorePosts;
