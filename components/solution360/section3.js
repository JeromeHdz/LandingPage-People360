import React from "react";

import Image from "next/image";

import { IconContext } from "react-icons";
import { ImBubbles4 } from "react-icons/im";
import { VscLibrary } from "react-icons/vsc";
import Cta from "../cta";

import fr from "../../locales/fr";

function Section3() {
  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2
            id="bilan"
            className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none xl:max-w-lg dark:text-white"
          >
            Former collectivement
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Développer les soft skills axées sur l'inclusion, l'empathie et le
            bien-être mental
          </p>
        </div>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-2">
        <div>
          <Image
            src="/img/solution360/workshop_01.jpg"
            width={500}
            height={300}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Conférences, ateliers d'experts, webinaires
          </h5>
          <p className="text-gray-700">
            Thématiques à sélectionner parmi notre catalogue ou organisation
            sur-mesure.
          </p>
        </div>
        <div>
          <Image
            src="/img/solution360/workshop_02.jpg"
            width={500}
            height={300}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Bibliothèque de contenus thématiques
          </h5>
          <p className="text-gray-700">
            Parentalité, maternité, séparation, aidants, seniors, reconversion,
            maladie, handicap, expatriation, impatriation, départ à la
            retraite...
            <br />
            <br />
            Accessible 24h/24
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col my-16 pb-0 items-center justify-center text-center">
        <div className="w-2/3">
          <Cta title={"Un atelier à organiser?"} />
        </div>
      </div>
    </div>
  );
}

export default Section3;
