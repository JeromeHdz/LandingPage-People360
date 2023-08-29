import React from "react";

import { IconContext } from "react-icons";
import { ImBubbles4 } from "react-icons/im";
import { VscLibrary } from "react-icons/vsc";
import Cta from "../cta";

import fr from "../../locales/fr";

function Section4() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <IconContext.Provider
                value={{
                  color: "#4F46E5",
                  size: "2em",
                  className: "global-class-name",
                }}
              >
                <ImBubbles4 />
              </IconContext.Provider>
            </div>
            <h6 className="mb-2 font-semibold leading-5 dark:text-white">
              {fr.Solution360.section4.feature1.title}
            </h6>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {fr.Solution360.section4.feature1.content}
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <IconContext.Provider
                value={{
                  color: "#4F46E5",
                  size: "2em",
                  className: "global-class-name",
                }}
              >
                <VscLibrary />
              </IconContext.Provider>
            </div>
            <h6 className="mb-2 font-semibold leading-5  dark:text-white">
              {fr.Solution360.section4.feature2.title}
            </h6>
            <p className="text-sm text-gray-700  dark:text-gray-300">
              {fr.Solution360.section4.feature2.content}
            </p>
          </div>
        </div>
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-3xl font-extrabold leading-none text-gray-900 dark:text-white">
            <span className="relative inline-block">
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
              <span className="relative">
                {fr.Solution360.section4.title.split(" ")[0]}
              </span>
            </span>{" "}
            {fr.Solution360.section4.title.split(" ").slice(1).join(" ")}
          </h5>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {fr.Solution360.section4.subtitle}
          </p>
          <div className="flex items-center">
            <Cta title={fr.Solution360.section4.cta} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
