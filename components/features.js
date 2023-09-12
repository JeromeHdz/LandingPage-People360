import React from "react";
import { featuresList } from "../components/data";
import { IconContext } from "react-icons";

import { getNotionContentBlockById } from "../utils";

function features({ data }) {
  return (
    <div className="px-4 py-0 md:text-left mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-5 border rounded shadow-sm"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <IconContext.Provider
                value={{
                  color: "#1D4ED8",
                  size: "2em",
                  className: "global-class-name",
                }}
              >
                {feature.icon}
              </IconContext.Provider>
            </div>
            <h6 className="mb-2 font-semibold leading-5 dark:text-white sm:text-center md:text-left">
              {getNotionContentBlockById(data, feature.titleNodtionId) ||
                feature.title}
            </h6>
            <p className="mb-3 text-sm text-gray-900 dark:text-gray-300 sm:text-center md:text-left">
              {getNotionContentBlockById(data, feature.descriptionNotionId) ||
                feature.description}
            </p>
            <a
              href={feature.link}
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-800 hover:text-deep-purple-800"
            >
              En savoir plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default features;
