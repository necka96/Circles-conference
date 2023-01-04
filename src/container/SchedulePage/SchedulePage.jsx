import React from "react";
import Schedule from "../../components/Schedule/Schedule";
import Text from "../../components/TextHolder/Text";
import schedule from "../../schedule";
import "./SchedulePage.scss";
const SchedulePage = () => {
  return (
    <div className='app__schedule'>
      <Text
        headerFourText={"SCHEDULE"}
        paragraph={
          "The biggest event of the year for creatives from all across the country. Be there as the design community comes together."
        }
      />
      <div className='app__schedule-item'>
        {schedule.map((item) => (
          <div key={Math.random()}>
            <Schedule {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
