// 'use client'; // For Next JS 13 app router

import React from "react";
import ScrollCarousel from 'scroll-carousel-react';
import Image from "next/image";


const RoadmapsButtons = (props) => {
  const { data } = props;
  return (
      
      <div className="carousel-container">
        <div className="left-fade"></div>
        <ScrollCarousel
          autoplay
          autoplaySpeed={6}
          speed={3}
          onReady={() => console.log('I am ready')}
          className="w-full"
        >
          {/* {data &&
        data.map((item, index) => (
          <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
            {item.icon} {item.title}
          </div>
        ))} */}
        {data &&
          data.map((item, index) => (
            
            <div key={item} className="wrapper antialiased py-20 hover:-translate-y-10" style={{ transition: 'transform 0.3s ease' }}>
              <div >

                <img src="" alt="" className="object-cover object-center rounded-lg shadow-md" />
                <Image
                  src={item.imgLink}
                  width="200"
                  height="200"
                  alt="Benefits"
                  className="object-cover rounded-3xl"

                />
                <div className="relative px-4 -mt-16 ">
                  <div className="bg-floral-white p-6 rounded-lg shadow-lg">


          <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{item.title}</h4>


         

        </div>
      </div>

  </div>
</div>
          ))}
        </ScrollCarousel>
        <div className="right-fade"></div>
      </div>
  );
};

export default RoadmapsButtons;