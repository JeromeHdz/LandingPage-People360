import React from "react";
import heroImg from "../../public/img/team/team2.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="container grid gap-6 mx-auto text-white text-left lg:grid-cols-6 justify-center flex items-center h-full">
      <div className="w-full lg:col-span-3 h-full">
        <div className="w-full lg:h-full flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold ">
            Nous croyons que les transitions de vie des collaborateurs bien
            gérées améliorent leur bien-être et les performances d'équipe.
          </h1>
        </div>
      </div>
      <div className="w-full lg:col-span-3 lg:pl-6 py-16 rounded-md sm:px-12 md:px-16 h-full flex items-center">
        <Image
          src={heroImg}
          width={480}
          height={360}
          alt=""
          className="object-cover w-full mx-auto shadow-2xl rounded-2xl overflow-hidden"
        />
      </div>
    </div>
  );
}

export default Hero;

{
  /* <div className="relative w-full h-[30rem]">

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
                jumps over a{" "} */
}
//           </h2>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
