import { useQuery } from "react-query";

import { getPreviewPosts } from "@/apis";

const usePostsPreview = () => {
  const { data, error, isLoading } = useQuery(["posts", 20], () =>
    getPreviewPosts(20)
  );

  return { data: data?.posts.nodes, error, isLoading };
};

export default usePostsPreview;
