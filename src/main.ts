import "./styles/main.scss";

interface INews {
  date: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface IMedals {
  country: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

const news = [
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
  {
    date: "23 Juli 2023",
    title: "Indonesia Menag 2-3 Melawan Dirinya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam ea magnam itaque sunt ad unde asperiores odio culpa voluptatum?",
    thumbnail: "/images/thumbnail.svg",
  },
];

const medals = [
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
  {
    country: "Indonesia",
    gold: 1,
    silver: 2,
    bronze: 3,
    total: 300,
  },
];

const renderNews = (news: INews[]) => {
  const newsList = document.querySelector("#news-list");

  newsList!.innerHTML = news
    .map(
      (news) => `<div class="news">
  <div class="news__thumbnail">
    <img src="${news.thumbnail}" alt="thumbnail" />
  </div>
  <div class="news__main-content">
    <div class="news__date">
      <div class="news__icon">
        <img src="/icons/voli.svg" alt="voli" />
      </div>
      <div class="news__separator"></div>
      <div class="news__date">${news.date}</div>
    </div>
    <h2 class="news__title">${news.title}</h2>
    <p class="news__description">${news.description}</p>
  </div>
</div>
  `
    )
    .toString();
};

const renderMedals = (medals: IMedals[]) => {
  const medalsList = document.querySelector("#medals");
  medalsList!.innerHTML = medals
    .map(
      (medal) => `<div class="medals__row">
  <div class="medals__number">1</div>
  <div class="medals__country">${medal.country}</div>
  <div class="medals__medal">${medal.gold}</div>
  <div class="medals__medal">${medal.silver}</div>
  <div class="medals__medal">${medal.bronze}</div>
</div>`
    )
    .toString();
};

renderNews(news);
renderMedals(medals);
