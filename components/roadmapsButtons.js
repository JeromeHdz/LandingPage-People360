// 'use client'; // For Next JS 13 app router

import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

const RoadmapsButtons = (props) => {
  const { data } = props;
  return (
    <div className="carousel-container">
      <div className="left-fade"></div>

      <div className="right-fade"></div>
    </div>
  );
};

export default RoadmapsButtons;
