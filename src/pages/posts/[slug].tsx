import { useRouter } from "next/router";

import Wrapper from "@/components/Wrapper";
import PostPreview from "@/components/PostPreview";
import Medals from "@/components/medals";

import { usePost } from "@/hooks";

import { IPost } from "@/interfaces";
import Image from "next/image";
import PostDate from "@/components/Date";

const Post = () => {
  const { query } = useRouter();

  const { slug } = query;

  const {
    data: { post, posts },
  } = usePost(slug);

  const renderArticle = () => (
    <article className="article">
      <h1 dangerouslySetInnerHTML={{ __html: post?.title }}></h1>
      <PostDate date={post?.date} place="Bali" />
      <div className="article__image">
        <Image
          src={post?.featuredImage?.node?.sourceUrl}
          alt="thumbnail"
          fill
        />
      </div>
      <div
        className="article__content"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
      <div
        className="article__content"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
    </article>
  );

  const renderMorePosts = () => (
    <div className="more-posts">
      {posts?.map(
        (post: IPost) =>
          post?.slug !== slug && (
            <PostPreview post={post} key={post.id} showThumbnail={false} />
          )
      )}
    </div>
  );

  return (
    <Wrapper title={post?.title}>
      <div className="post">
        {renderArticle()}
        <aside className="post__aside">
          {renderMorePosts()}
          <Medals />
        </aside>
      </div>
    </Wrapper>
  );
};

export default Post;
