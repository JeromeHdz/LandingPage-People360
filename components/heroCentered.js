import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import fr from "../locales/fr";
import Cta from "../components/cta";

import { Tb360View } from "react-icons/tb";
import { IconContext } from "react-icons";

const HeroCentered = (props) => {
  return (
    <>
      <Container className="flex flex-wrap "></Container>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-5xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <IconContext.Provider
                value={{
                  color: "#4F46E5",
                  size: "2em",
                  className: "global-class-name",
                }}
              >
                <Tb360View />
              </IconContext.Provider>
            </div> */}
            <div className="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12">
              <h2 className="max-w-5xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {/* <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">{props.title.split(" ")[0]}</span>
                </span>{" "} */}
                {props.title}
              </h2>
              <p className=" pt-6 mt-3 text-center text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {props.subTitle}
              </p>
            </div>
            <div>
              <Cta title={fr.Global.cta} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCentered;
