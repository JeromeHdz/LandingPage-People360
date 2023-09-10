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
          <p className="mb-6 text-base text-indigo-100 md:text-lg">
            Les résultats d'une politique favorisant le bien-être des salariés
            ont été mis en évidence par plusieurs études indépendantes :
          </p>

          <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            <div className="flex flex-col justify-between space-y-6 p-10">
              <div>
                <p className="text-lg font-semibold text-white sm:text-base">
                  Salariés + motivés
                </p>
                <p className="text-2xl font-bold text-white sm:text-xl">89%</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white sm:text-base">
                  Turnover divisé par
                </p>
                <p className="text-2xl font-bold text-white sm:text-xl">2</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white sm:text-base">
                  Performance salarié
                </p>
                <p className="text-2xl font-bold text-white sm:text-xl">
                  +130%
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold text-white sm:text-base">
                  Amelioration du bien-être de{/* vont mieux */}
                </p>
                <p className="text-2xl font-bold text-white sm:text-xl">
                  88% des Salariés
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white sm:text-base">
                  Meilleure capacité d’adaptation
                </p>
                <p className="text-2xl font-bold text-white sm:text-xl">77%</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white sm:text-base">
                  Environnement + inclusif
                </p>
                <p className="text-2xl font-bold text-white sm:text-xl">78%</p>
              </div>
            </div>
          </div>

          <p className="mb-6 py-8 text-base text-indigo-100 md:text-lg">
            Acteur de l'innovation sociale, notre expertise est reconnue et
            ancrée auprès des institutions locales parisiennes et acteurs de
            l'économie sociale et solidaire.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section4;
