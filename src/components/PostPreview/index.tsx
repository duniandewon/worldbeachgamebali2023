import Image from "next/image";
import Link from "next/link";

import { IPost } from "@/interfaces";
import PostDate from "../Date";

interface Props {
  post: IPost;
  showExcerpt?: Boolean;
}

const PostPreview = ({ post, showExcerpt = true }: Props) => {
  return (
    <div className="news">
      <Link href={`/posts/${post.slug}`} className="thumbnail">
        <Image src={post.featuredImage.node.sourceUrl} alt="thumbnail" fill />
      </Link>
      <div className="news__main-content">
        <PostDate date={post.date} place="Bali" />
        <Link href={`/posts/${post.slug}`}>
          <h2
            className="news__title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </Link>
        {showExcerpt && (
          <p
            className="news__description"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}
      </div>
    </div>
  );
};

export default PostPreview;
