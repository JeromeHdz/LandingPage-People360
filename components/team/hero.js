import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-blue-900 bg-opacity-75 h-[600px]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full mb-12 xl:mb-0 xl:pr-16">
              <h2 className=" mt-24 mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                "Nous croyons que les transitions de vie des collaborateurs bien
                gérées amélioreront votre bien-être et vos performances
                d'équipe."
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
