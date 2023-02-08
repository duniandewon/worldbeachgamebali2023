import { useQuery } from "react-query";

import { getPreviewPosts } from "@/apis";

const usePostsPreview = () => {
  const { data, error, isLoading } = useQuery("posts", () => getPreviewPosts());

  return { data: data?.posts.nodes, error, isLoading };
};

export default usePostsPreview;
