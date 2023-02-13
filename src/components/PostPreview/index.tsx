import Image from "next/image";
import Link from "next/link";

import { IPost } from "@/interfaces";

const PostPreview = ({ post }: { post: IPost }) => {
  return (
    <div className="news">
      {post.featuredImage && (
        <div className="news__thumbnail">
          <Image src={post.featuredImage.node.sourceUrl} alt="thumbnail" />
        </div>
      )}
      <div className="news__main-content">
        <div className="news__date">
          <div className="news__icon">
            {/* <img src="/icons/voli.svg" alt="voli" /> */}
          </div>
          <div className="news__separator"></div>
          <div className="news__date">{post.date}</div>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h2
            className="news__title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </Link>
        <p
          className="news__description"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      </div>
    </div>
  );
};

export default PostPreview;
