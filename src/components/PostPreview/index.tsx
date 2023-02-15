import Image from "next/image";
import Link from "next/link";

import { IPost } from "@/interfaces";
import PostDate from "../Date";

interface Props {
  post: IPost;
  showThumbnail?: Boolean;
}

const PostPreview = ({ post, showThumbnail = true }: Props) => {
  return (
    <div className="news">
      {showThumbnail && (
        <div className="thumbnail">
          <Image src={post.featuredImage.node.sourceUrl} alt="thumbnail" fill />
        </div>
      )}
      <div className="news__main-content">
        <Link href={`/posts/${post.slug}`}>
          <h2
            className="news__title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </Link>
        <PostDate date={post.date} place="Bali" />
        <p
          className="news__description"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      </div>
    </div>
  );
};

export default PostPreview;
