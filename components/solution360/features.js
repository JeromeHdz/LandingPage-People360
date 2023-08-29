import React from "react";

import { IconContext } from "react-icons";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

function Features() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none xl:max-w-lg dark:text-white">
            Faites le bilan
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Fixons ensemble vos enjeux ...
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-2">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <IconContext.Provider
              value={{
                color: "#4F46E5",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <BsFullscreen />
            </IconContext.Provider>
          </div>
          <h6 className="mb-2 font-semibold leading-5 dark:text-white">
            Audi Global
          </h6>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            plan action
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            plan action
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            plan action
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <IconContext.Provider
              value={{
                color: "#4F46E5",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <BsFullscreenExit />
            </IconContext.Provider>
          </div>
          <h6 className="mb-2 font-semibold leading-5 dark:text-white">
            Micro Audit
          </h6>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            There can be no thought of finishing for "aiming for the stars".
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            There can be no thought of finishing for "aiming for the stars".
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            There can be no thought of finishing for "aiming for the stars".
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
