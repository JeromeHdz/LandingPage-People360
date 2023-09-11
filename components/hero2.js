import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/home/63237416debe46ff9dfa77cff18fc9b0.jpg";
import fr from "../locales/fr";
import Link from "next/link";
import { getNotionContentBlockById, getNotionImageById } from "../utils";

const Hero2 = ({ data }) => {
  return (
    <div className="relative w-full">
      
      <Image
        src={
          getNotionImageById(data, "16810fbb8a1f4f1d82a3b0bf28fb00dc") ||
          heroImg
        }
        className="absolute inset-0 object-cover w-full h-full"
        alt="Hero Illustration"
        loading="eager"
      />
      <div className="relative bg-rose-50 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full  mb-12 xl:mb-0 xl:pr-16">
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {/* {getNotionContentBlockById(
                  data,
                  "5a5fb2f4cbbc49eab54314fc22a9cf35"
                ) || fr.LandingPage.hero.catchPhrase} */}
                Réenchantez les transitions de vie de vos salariés, vivez une expérience 360°
                {/* <br className="hidden md:block" />
              can imagine{' '}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span> */}
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                {getNotionContentBlockById(
                  data,
                  "b00f0812bbca44abaae427d3130926e9"
                ) || fr.LandingPage.hero.tagline}
              </p>
              <Link
                href="/book-demo"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-orange-400 rounded-md "
              >
                {getNotionContentBlockById(
                  data,
                  "e86bcf03d58a4ab78620a0c3f7c1695a"
                ) || fr.LandingPage.hero.ctaDemo}
              </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
