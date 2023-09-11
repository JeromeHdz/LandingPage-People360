import React from "react";
import heroImg from "../../public/img/team/team.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-[30rem]">

      <Image
        src={
          heroImg
        }
        className="absolute inset-0 object-cover w-full h-full"
        alt="Hero Illustration"
        loading="eager"
      />
      <div className="relative bg-amber-50 bg-opacity-75 h-[30rem]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full mb-12 xl:mb-0 xl:pr-16">
              <h2 className=" w-2/3 mt-40 mb-6 font-sans text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Nous croyons que les transitions de vie des collaborateurs bien gérées améliorent leur bien-être et les performances d'équipe.
                {/* The quick, brown fox <br className="hidden md:block" />
                jumps over a{" "} */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
