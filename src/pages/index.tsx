import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useMemo } from "react";

import { Medal } from "@/assets/icons";
import Wrapper from "@/components/Wrapper";

import { usePostsPreview } from "@/hooks";

import { IPost } from "@/interfaces";
import Link from "next/link";

const medals = [
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Cina",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Filipn",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Malaysia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Tailand",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "India",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Pakistan",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Iran",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Iraq",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Qatar",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Bosnia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Kenya",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Tanzania",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
];

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

        <section className="medals">
          <div className="medals__row">
            <div className="medals__number">
              <Medal />
            </div>
            <div className="medals__country">Negara</div>
            <div className="medals__medal medals__medal--gold"></div>
            <div className="medals__medal medals__medal--silver"></div>
            <div className="medals__medal medals__medal--bronz"></div>
          </div>
          {useMemo(
            () =>
              medals.map((medal) => (
                <div className="medals__row" key={medal.country}>
                  <div className="medals__number">1</div>
                  <div className="medals__country">{medal.country}</div>
                  <div className="medals__medal">{medal.gold}</div>
                  <div className="medals__medal">{medal.silver}</div>
                  <div className="medals__medal">{medal.bronze}</div>
                </div>
              )),
            []
          )}
        </section>
      </section>
    </Wrapper>
  );
}
