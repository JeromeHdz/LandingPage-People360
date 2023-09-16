//"use client"; // For Next JS 13 app router

import React from "react";
// import dynamic from "next/dynamic";

// const ScrollCarousel = dynamic(
//   () => import("../components/scrollCarouselComponent"),
//   { ssr: false }
// );
import Image from "next/image";

const RoadmapsButtons = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {data &&
        data.map((item, index) => (
          <div
            key={item.id}
            className="wrapper antialiased py-5 hover:-translate-y-2.5 transition-transform duration-300"
          >
            <div className="">
              <Image
                src={item.imgLink}
                width="200"
                height="200"
                alt="Benefits"
                className="object-cover mx-auto rounded-3xl text-center "
              />
              <div className="relative px-8 mx-8 -mt-12">
                <div className="bg-floral-white p-6 rounded-lg shadow-lg">
                  <h4 className="mt-1 font-semibold uppercase leading-tight truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RoadmapsButtons;
