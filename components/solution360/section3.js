import React from "react";

import Image from "next/image";

import { IconContext } from "react-icons";
import { ImBubbles4 } from "react-icons/im";
import { VscLibrary } from "react-icons/vsc";

import fr from "../../locales/fr";
import CtaSolution from "../ctaSolution";

function Section3() {
  return (
    <div className="py-16 w-full md:px-24 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="flex flex-col" id="former-collectivement">
          <h2
            id="bilan"
            className="max-w-5xl mt-3 text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-5xl "
          >
            Former collectivement
          </h2>

          <p className="max-w-4xl pt-6 mt-3 text-lg leading-normal lg:text-xl xl:text-3xl ">
            Développer les soft skills axées sur l'inclusion, l'empathie et le
            bien-être mental
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-6 text-center">
        <div className="w-1/2 lg:w-auto">
          <div className="max-w-md mx-auto">
            <Image
              src="/img/solution360/workshop_01.jpg"
              width={300}
              height={200}
              alt=""
              className="mx-auto shadow-2xl rounded-2xl overflow-hidden"
            />
            <h5 className="mb-2 pt-8 text-xl font-bold leading-none text-center sm:text-2xl">
              Conférences, ateliers d'experts, webinaires
            </h5>
            <p className="text-xl text-center">
              Thématiques à sélectionner parmi notre catalogue ou organisation
              sur-mesure.
            </p>
          </div>
        </div>
        <div className="w-1/2 lg:w-auto">
          <div className="max-w-md mx-auto">
            <Image
              src="/img/solution360/workshop_02.jpg"
              width={300}
              height={200}
              alt=""
              className="mx-auto shadow-2xl rounded-2xl overflow-hidden"
            />
            <h5 className="mb-2 pt-8 text-xl font-bold leading-none sm:text-2xl">
              Bibliothèque de contenus thématiques
            </h5>
            <p className="text-xl">
              Parentalité, maternité, séparation, aidants, seniors, reconversion,
              maladie, handicap, expatriation, impatriation, départ à la
              retraite...
              <br />
              <br />
              Accessible 24h/24
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-8 mx-auto justify-center items-center">
        <CtaSolution title={"Un atelier à organiser?"} />
      </div>
    </div>
  );
}

export default Section3;
