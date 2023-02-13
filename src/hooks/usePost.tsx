import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { getPostAndMorePosts } from "@/apis";

const usePostsPreview = (slug: string | string[] | undefined) => {
  const { data, error, isLoading } = useQuery(["post", slug], () =>
    getPostAndMorePosts(slug)
  );

  return {
    data: { post: data?.post, posts: data?.posts.nodes },
    error,
    isLoading,
  };
};

export default usePostsPreview;
