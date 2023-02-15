import Image from "next/image";

import Moment from "react-moment";

interface Props {
  icon?: string;
  date: string;
  place: string;
}

const PostDate = ({ icon, date, place }: Props) => {
  return (
    <div className="date">
      {icon && (
        <span className="date__icon">
          <Image src="/icons/voli.svg" alt="voli" />
        </span>
      )}
      <div className="date__separator"></div>
      <span className="date__place">{place},</span>
      <span className="date__date">
        <Moment date={date} format="DD MMMM YYYY" />
      </span>
    </div>
  );
};

export default PostDate;
