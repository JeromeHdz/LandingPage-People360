import Image from "next/image";
import React from "react";
import Container from "./container";
import CtaBenefit from "./ctaBenefit";

import fr from "../locales/fr";

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap xl:px-24 mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div className="shadow-2xl rounded-2xl overflow-hidden">
            <Image
              src={data.image}
              width="800"
              height="555"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end pl-24" : ""
          }`}
        >
          <div>
            <div className={`flex flex-col w-full mt-4 `}>
              <h4 className="text-2xl font-medium ">
                {data.tags.map((item) => "#" + item + " ")}
              </h4>
              <h3
                id={data.id}
                className="max-w-2xl mt-3 text-4xl font-bold leading-snug tracking-tight  lg:leading-tight"
              >
                {data.title}
              </h3>
              <h2
                id={data.id}
                className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-2xl "
              >
                {data.subtitle}
              </h2>
              <h3
                id={data.id}
                className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight  lg:leading-tight "
              ></h3>
              <p
                className="max-w-2xl py-4 text-xl leading-normal  "
                dangerouslySetInnerHTML={{ __html: data.desc }}
              ></p>
            </div>

            {/* <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div> */}
          </div>
          <div className="flex flex-col w-full mt-8">
            <CtaBenefit title={data.ctaTitle} />
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 ",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium">{props.title}</h4>
          <p className="mt-1  ">{props.children}</p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
