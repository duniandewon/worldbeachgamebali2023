import Image from "next/image";

import Moment from "react-moment";

import { IPost } from "@/interfaces";

interface Props {
  post: IPost;
  key: string;
}

const PostPreview = ({ post, key }: Props) => {
  return (
    <div key={key} className="post-preview">
      <div className="post-preview__image">
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText}
          fill
        />
      </div>
      <div className="post-preview__body">
        <h3
          className="post-preview__title"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div className="post-preview__category-date">
          <p className="post-preview__category">category berita</p>
          <p className="post-preview__date">
            <Moment format="DD MMMM YYYY">{post.date}</Moment>
          </p>
        </div>
        <p
          className="post-preview__excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      </div>
    </div>
  );
};

export default PostPreview;
