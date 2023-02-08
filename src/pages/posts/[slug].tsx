import { useRouter } from "next/router";

import Wrapper from "@/components/Wrapper";
import { usePost } from "@/hooks";

const Post = () => {
  const { query } = useRouter();

  const { slug } = query;

  const {
    data: { post, posts: morePosts },
  } = usePost(slug);

  return (
    <Wrapper title="">
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: post?.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: post?.content }} />
      </article>
    </Wrapper>
  );
};

export default Post;
