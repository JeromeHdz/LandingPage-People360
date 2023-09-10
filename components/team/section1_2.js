import React from "react";

function section1_2() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Une rencontre
              <br className="hidden md:block" />
              qui donne des ailes
            </h2>

            <p className="text-base text-gray-700 md:text-lg">
              <b>
                People 360 est né de la rencontre de deux entrepreneurs experts
                de la parentalité et engagés pour le bien-être au service de la
                performance au travail{" "}
              </b>
              <br />
              <br />
              Ingrid et Laurent ont tous deux travaillé dans des grands groupes.
              Ils ont su analyser et comprendre les dysfonctionnements des
              process qui impactaient négativement les équipes à chaque nouvelle
              transition de vie. Et l'histoire se répétait inlassablement, ici
              et ailleurs...
              <br />
              <br />
              Après 15 ans chez l'Oréal, Ingrid a fondé Kidd'izy, une start up
              d'utilité sociale orientée santé et bien-être. Kidd'izy Entreprise
              accompagnait les parents et Kidd’izy Médical a été un acteur
              incontournable de la lutte contre la Covid-19 en distribuant le
              matériel médical aux pharmacies et entreprises partenaires.
              <br />
              Après des années dans la formation et l'édition, notamment chez
              Télélangues, Laurent a fondé 1001 parents, une start up dédiée à
              l'accompagnement des salariés parents.
              <br />
              <br />
              Ensemble, ils ont l’ambition{" "}
              <b>
                d’accompagner plus largement les transitions de vie qui
                impactent l’équilibre, l’activité et la stabilité
                professionnelles des salariés.
              </b>{" "}
              <br />
              Et pour donner vie à leur projet, ils s'associent à Jérôme,
              l'expert de la tech et de l'IA. Il partage avec nous cette vision
              du bien-être qui lui a cruellement manquée en Corée.
              <br />
              <br />
              Nous voilà réunis pour donner vie à un projet très ambitieux qui
              va révolutionner la vie des entreprises, des DRH et de tous les
              collaborateurs à l'ère post covid.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default section1_2;
