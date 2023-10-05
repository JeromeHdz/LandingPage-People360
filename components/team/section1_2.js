import React from "react";
import Image from "next/image";

function section1_2() {
  return (
    <div className="px-4 py-16 mx-auto w-full lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="w-full flex flex-col md:flex-row justify-center md:pr-8 xl:pr-0 ">
        <div className="mb-6 w-full md:w-2/3">
          <h2 className=" w-full mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
            Une rencontre
            <br className="hidden md:block" />
            qui donne des ailes
          </h2>

          <p className="text-base  ">
            <b>
              People 360 est né de la rencontre de deux entrepreneurs experts de
              la parentalité et engagés pour le bien-être au service de la
              performance au travail
            </b>
            <br />
            <br />
            Ingrid et Laurent ont tous deux travaillé dans des grands groupes.
            Ils ont su analyser les dysfonctionnements des process qui
            impactaient négativement les équipes à chaque transition de vie. Et
            l'histoire se répétait inlassablement, ici et ailleurs...
            <br />
            <br />
            Après 15 ans chez l'Oréal, Ingrid a fondé Kidd'izy, une start up
            d'utilité sociale orientée santé et bien-être. Kidd'izy Entreprise
            accompagnait les parents et Kidd’izy Médical a été un acteur
            incontournable de la lutte contre la Covid-19.
            <br />
            Pour sa part, Laurent, après 18 ans dans la formation et l'édition
            (Telelangue, Berlitz…), a fondé 1001 parents, start up dédiée à
            l'accompagnement des salariés parents.
            <br />
            <br />
            Très rapidement, ils s'associent à Jérôme, l'expert de la Tech et de
            l'IA.
            <br />
            Ensemble, ils ont l’ambition d’accompagner plus largement les
            transitions de vie qui impactent l’équilibre, l’activité et la
            stabilité professionnelle des salariés.
            <br />
          </p>
        </div>
        <div className="mb-6 w-full md:w-1/3 flex justify-center items-center">
          <Image
            src="/img/team/p360-logo.png"
            alt="logo people 360"
            width={300} // Mettez la largeur originale de l'image ici
            height={365} // Mettez la hauteur originale de l'image ici
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default section1_2;
