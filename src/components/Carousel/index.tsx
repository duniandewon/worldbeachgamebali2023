import { useState } from "react";
import Image from "next/image";

import Moment from "react-moment";

import { IPost } from "@/interfaces";

interface Props {
  posts: IPost[] | undefined;
}

const Carousel = ({ posts }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClickNext = () => {
    if (posts && slideIndex === posts.length - 1) {
      setSlideIndex(0);
      return;
    }

    setSlideIndex((prev) => (prev += 1));
  };

  const handleClickPrev = () => {
    if (posts && slideIndex === 0) {
      setSlideIndex(posts.length - 1);
      return;
    }

    setSlideIndex((prev) => (prev -= 1));
  };

  const jumpToSlide = (slideIndex: number) => setSlideIndex(slideIndex);

  if (!posts) return <p>loading...</p>;

  return (
    <div className="carousel">
      <div className="carousel__body">
        <div className="sticky-post">
          <h2 className="sticky-post__title">{posts[slideIndex].title}</h2>
          <p className="sticky-post__category">surfing news</p>
          <p className="sticky-post__date">
            <Moment format="DD MMMM YYYY">{posts[slideIndex].date}</Moment>
          </p>
          <p
            className="sticky-post__excerpt"
            dangerouslySetInnerHTML={{ __html: posts[slideIndex].excerpt }}
          />
        </div>
        <div className="carousel__navs">
          <button
            className="carousel__nav carousel__nav--prev"
            onClick={handleClickPrev}
          >
            prev
          </button>
          <button
            className="carousel__nav carousel__nav--next"
            onClick={handleClickNext}
          >
            next
          </button>
        </div>
      </div>
      <div className="carousel__image">
        <Image
          src={posts[slideIndex].featuredImage.node.sourceUrl}
          alt={posts[slideIndex].featuredImage.node.altText}
          fill
        />
        <div className="carousel__dots">
          {posts?.map((post, i) => (
            <div
              key={post.id}
              className={`${slideIndex === i ? "active" : ""}`}
              onClick={() => jumpToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
