import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/home/63237416debe46ff9dfa77cff18fc9b0.jpg";
import fr from "../locales/fr";
import Link from "next/link";
import { getNotionContentBlockById, getNotionImageById } from "../utils";

const Hero2 = ({ data }) => {
  return (
    <div className="relative w-full">
      {/* <Image
        src={
          getNotionImageById(data, "16810fbb8a1f4f1d82a3b0bf28fb00dc") ||
          heroImg
        }
        className="absolute inset-0 object-cover w-full h-full"
        alt="Hero Illustration"
        loading="eager"
      /> */}

      <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pb-20 h-screen">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className=" w-full mb-12 xl:mb-0 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="">
              <h2 className="mb-8 xl:mt-[-150px] font-sans text-4xl relative z-3 font-semi-bold tracking-tight text-dark-cerulean sm:text-5xl sm:leading-none md:mr-[-40%]">
                Réenchantez les transitions de vie de vos salariés, vivez une
                expérience 360°
              </h2>
              <p className="w-full my-8 text-base text-xl text-dark-cerulean md:text-2xl">
                {getNotionContentBlockById(
                  data,
                  "b00f0812bbca44abaae427d3130926e9"
                ) || fr.LandingPage.hero.tagline}
              </p>
              <Link
                href="/book-demo"
                target="_blank"
                rel="noopener"
                className=" px-2 md:px-8 py-4 my-8 xs:text-md md:text-lg font-medium text-center text-white bg-dark-cerulean hover:bg-floral-white hover:text-dark-cerulean rounded-md "
              >
                {getNotionContentBlockById(
                  data,
                  "e86bcf03d58a4ab78620a0c3f7c1695a"
                ) || fr.LandingPage.hero.ctaDemo}
              </Link>
            </div>
            <div>
              <img className="z-1" src="img/home/home-girl.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
