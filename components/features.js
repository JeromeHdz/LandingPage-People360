import React from "react";
import { featuresList } from "../components/data";
import { IconContext } from "react-icons";

import { getNotionContentBlockById } from "../utils";

function features({ data }) {
  return (
    <div className="px-4 py-0 md:text-left mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
      <div className="grid gap-5 row-gap-5 mb-8 grid-cols-2">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-5 rounded h-46 w-46"
          >
            <a
              href={feature.link}
              aria-label=""
              className="inline-block overflow-hidden duration-300 transform rounded hover:-translate-y-2"
            >
              <div className="flex flex-col ">
                <div className="w-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg??auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=750"
                    className="w-72 h-72 object-cover rounded-3xl mx-auto "
                    alt=""
                  />
                </div>
                
                <div className="flex-grow rounded-b ">
                  <div className="p-5 text-center"> {/* Centering text */}
                    <h6 className="mb-2 text-lg font-bold leading-5">{feature.title.toUpperCase()}</h6>
                    <p className="text-md">{feature.description}</p>
                    <div className="pt-2 font-bold underline">En savoir plus</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default features;
