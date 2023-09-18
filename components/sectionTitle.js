import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <div className="pt-16">
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider  uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-5xl mt-3 text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-5xl ">
          {/* <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">{props.title.split(" ")[0]}</span>
          </span>{" "} */}
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-4xl pt-6 mt-3 text-lg leading-normal lg:text-xl xl:text-3xl ">
          {props.children}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
