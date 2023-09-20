import Image from "next/image";
import Container from "./container";
import fr from "../locales/fr";
import CtaSolution from "../components/ctaSolution";

import { Tb360View } from "react-icons/tb";
import { IconContext } from "react-icons";

const HeroCentered = (props) => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* First Image */}
        <div className="block lg:hidden relative w-full h-48">
          <Image
            src="/img/solution360/management.png" // Mettez le chemin vers votre nouvelle image ici
            alt="Mobile Image"
            layout="fill"
            objectFit="contain"
            className="rounded-3xl"
          />
        </div>

        {/* First Image - Hidden on small screens */}
        <div className="hidden lg:block relative col-span-1 w-full h-48">
          <Image
            src="/img/solution360/management-1-orange.png"
            alt="Benefits"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
            className="rounded-3xl lg:min-h-[500px]"
          />
        </div>

        {/* Title and Subtitle - Takes 3/5 of the width */}
        <div className="col-span-3 max-w-2xl mb-10 md:mx-auto text-center lg:max-w-5xl md:mb-12">
          <h2 className="mt-3 text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug tracking-tight mx-6">
            {props.title}
          </h2>
          <p className="pt-6 mt-3 text-center text-lg leading-normal mx-6">
            {props.subTitle}
          </p>
        </div>

        {/* Second Image - Hidden on small screens */}
        <div className="hidden lg:block relative col-span-1 w-full h-48 pr-8">
          <Image
            src="/img/solution360/management-2-orange.png"
            alt="Benefits"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="rounded-3xl lg:min-h-[500px]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 px-0 xl:px-64 w-2/3 mx-auto">
        <CtaSolution title={fr.Global.cta} />
      </div>
    </div>
  );
};

export default HeroCentered;
