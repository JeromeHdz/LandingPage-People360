import React from "react";
import Container from "./container";

const RoadmapsButtons = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div class="grid md:auto-cols-max gap-4 md:grid-flow-col md:grid-rows-auto grid-rows-2">
      {data &&
        data.map((item, index) => (
          <button key={index} className="btn">
            {item.icon} {item.title}
          </button>
        ))}
    </div>
  );
};

export default RoadmapsButtons;
