import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/home/63237416debe46ff9dfa77cff18fc9b0.jpg";
import fr from "../locales/fr";
import Link from "next/link";
import { getNotionContentBlockById, getNotionImageById } from "../utils";

const Hero = ({ data }) => {
  return (
    <div className="relative w-full flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        {/* <Image
          src={
            getNotionImageById(data, "16810fbb8a1f4f1d82a3b0bf28fb00dc") ||
            heroImg
          }
          className={"object-cover pr-16 rounded-lg"}
          alt="Hero Illustration"
          loading="eager"
        /> */}
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-8 md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {getNotionContentBlockById(
              data,
              "5a5fb2f4cbbc49eab54314fc22a9cf35"
            ) || fr.LandingPage.hero.catchPhrase}
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
          <div className="flex items-center">
            <Link
              href="/book-demo"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-700 rounded-md "
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
  );
};

export default Hero;
