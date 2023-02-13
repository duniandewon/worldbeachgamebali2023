import Image from "next/image";
import { useMemo } from "react";

import Wrapper from "@/components/Wrapper";

import { usePostsPreview } from "@/hooks";

import { IPost } from "@/interfaces";
import Link from "next/link";
import Medals from "@/components/medals";

export default function Home() {
  const { data } = usePostsPreview();

  return (
    <Wrapper title="Home">
      <header className="hero">
        <div className="hero__text">
          <h2 className="hero__title">Surfing dimulai tanggal 22 juli 2023</h2>
          <p className="hero__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe
            repudiandae labore assumenda magni magnam autem mollitia molestias,
            et exercitationem.
          </p>
        </div>
      </header>
      <section className="main-content">
        <Medals />
        <section id="news-list" className="news-list">
          {useMemo(
            () =>
              data?.map((post: IPost) => (
                <div className="news" key={post.id}>
                  {post.featuredImage && (
                    <div className="news__thumbnail">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt="thumbnail"
                      />
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
              )),
            [data]
          )}
        </section>
      </section>
    </Wrapper>
  );
}
