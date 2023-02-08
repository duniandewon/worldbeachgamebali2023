import { request } from "graphql-request";
import { QEURY_POST_BY_SLUG } from "@/data/posts";

const getPostAndMorePosts = async (slug: string | string[] | undefined) => {
  const res = await request(
    "http://awbgbali2023.local/graphql",
    QEURY_POST_BY_SLUG,
    {
      slug,
    }
  );

  return res;
};

export default getPostAndMorePosts;
