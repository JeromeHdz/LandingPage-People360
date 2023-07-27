import React from "react";
import Container from "./container";

const RoadmapsButtons = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Container
      className={`flex w-full flex-col mb-20 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      <div class="grid grid-flow-col auto-cols-max gap-4">
        {data &&
          data.map((item, index) => (
            <button key={index} className="btn">
              {item.icon} {item.title}
            </button>
          ))}
      </div>
    </Container>
  );
};

export default RoadmapsButtons;
