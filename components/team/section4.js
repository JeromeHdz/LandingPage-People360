import React from "react";

function Section4() {
  return (
    <div className="relative bg-blue-700 w-full">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Au service de la performance d'entreprise
          </h2>
          <p className="mb-6 text-base text-indigo-100 md:text-2xl">
            Nous assistons les managers et responsables RH dans leurs enjeux
            réglementaires et sociétaux.
          </p>
         
          
          <p className=" py-8 text-base text-indigo-100 md:text-lg">
            Acteur de l'innovation sociale, notre expertise est reconnue et
            ancrée auprès des institutions et acteurs de
            l'économie sociale et solidaire.
          </p>
          <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div class="grid row-gap-8 sm:grid-cols-3">
              <div class="text-center">
                <h6 class="text-5xl font-bold text-white">88%</h6>
                <p class="font-bold text-white">                  des salariés vont mieux
</p>
              </div>
              <div class="text-center">
                <h6 class="text-5xl font-bold text-white">77%</h6>
                <p class="font-bold text-white"> Meilleure capacité d’adaptation</p>
              </div>
              <div class="text-center">
                <h6 class="text-5xl font-bold text-white">78%</h6>
                <p class="font-bold text-white">  Environnement + inclusif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
