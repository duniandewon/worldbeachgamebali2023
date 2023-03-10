import { useMemo } from "react";
import { Medal } from "@/assets/icons";

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

const Medals = () => {
  return (
    <div className="medals">
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
    </div>
  );
};

export default Medals;
