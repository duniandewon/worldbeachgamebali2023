import { useMemo } from "react";

import Wrapper from "@/components/Wrapper";

import Carousel from "@/components/Carousel";
import PostPreview from "@/components/PostPreview";

import { usePostsPreview } from "@/hooks";

import { IPost } from "@/interfaces";

export default function Home() {
  const { data } = usePostsPreview();

  const stickyPosts = useMemo(
    () => data?.filter((post: IPost) => post.isSticky),
    [data]
  );

  const latestNews = useMemo(
    () => data?.filter((post: IPost) => !post.isSticky).slice(0, 4),
    [data]
  );

  return (
    <Wrapper title="Home">
      <main>
        <Carousel posts={stickyPosts} />
        <section className="latest-news">
          {latestNews?.map((post) => (
            <PostPreview post={post} key={post.id} />
          ))}
        </section>
      </main>
    </Wrapper>
  );
}
