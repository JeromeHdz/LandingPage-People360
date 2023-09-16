"use client"; // For Next JS 13 app router

import React from "react";
const ScrollCarousel = dynamic(
  () => import("@/components/ScrollCarouselComponent"),
  { ssr: false }
);
import Image from "next/image";

const RoadmapsButtons = (props) => {
  const { data } = props;
  return (
    <div className="carousel-container">
      <div className="left-fade"></div>
      <ScrollCarousel data={data} />
      <div className="right-fade"></div>
    </div>
  );
};

export default RoadmapsButtons;
