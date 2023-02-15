import Day from "../Day";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule">
        <div className="schedule__sport">Kitefoil Racing</div>
        <div className="schedule__days">
          <Day name="Mon" date={20} />
        </div>
      </div>
      <div className="schedule">
        <div className="schedule__sport">Kitefoil Racing</div>
        <div className="schedule__days">
          <Day name="Mon" date={20} />
          <Day name="Mon" date={20} />
          <Day name="Mon" date={20} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
