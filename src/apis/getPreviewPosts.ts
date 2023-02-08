import { QEURY_ALL_POSTS } from "@/data/posts";
import { request } from "graphql-request";

const getPreviewPosts = async () => {
  const res = await request(
    "http://awbgbali2023.local/graphql",
    QEURY_ALL_POSTS
  );

  return res;
};

export default getPreviewPosts;
