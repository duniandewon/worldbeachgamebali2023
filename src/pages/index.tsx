import Image from "next/image";
import { useMemo } from "react";

import Wrapper from "@/components/Wrapper";

import { usePostsPreview } from "@/hooks";

import { IPost } from "@/interfaces";
import Link from "next/link";
import Medals from "@/components/medals";
import PostPreview from "@/components/PostPreview";

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
                <PostPreview post={post} key={post.id} />
              )),
            [data]
          )}
        </section>
      </section>
    </Wrapper>
  );
}
