import Image from "next/image";
import Container from "./container";
import fr from "../locales/fr";
import Cta from "../components/cta";

import { Tb360View } from "react-icons/tb";
import { IconContext } from "react-icons";

const HeroCentered = (props) => {
  return (
    <div className=" py-16 lg:py-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Image */}
        <div className="relative w-full h-72 lg:h-auto">
          <Image
            src="/img/solution360/management.png"
            alt="Benefits"
            layout="fill"
            objectFit="contain"
            className="rounded-3xl"
          />
        </div>

        {/* Title and Subtitle */}
        <div className="max-w-2xl mb-10 md:mx-auto text-center lg:max-w-5xl md:mb-12 px-8">
          <h2 className="max-w-5xl mt-3 text-3xl font-bold leading-snug tracking-tight ">
            {props.title}
          </h2>
          <p className="pt-6 mt-3 text-center text-lg leading-normal ">
            {props.subTitle}
          </p>
        </div>

        {/* Second Image - Hide on small screens */}
        <div className="hidden lg:block relative w-full">
          <Image
            src="/img/solution360/coaching.png"
            alt="Benefits"
            layout="fill"
            objectFit="contain"
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 px-64">
        <Cta title={fr.Global.cta} className="w-2/3" />
      </div>
    </div>
  );
};

export default HeroCentered;
