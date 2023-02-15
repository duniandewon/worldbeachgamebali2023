interface Props {
  name: string;
  date: number;
  isFinal?: Boolean;
}

const Day = ({ name, date }: Props) => {
  return (
    <div className="day">
      <p className="day__name">{name}</p>
      <p className="day__date">{date}</p>
    </div>
  );
};

export default Day;
