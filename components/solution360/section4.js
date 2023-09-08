import React from "react";

import Image from "next/image";

import { IconContext } from "react-icons";
import { ImBubbles4 } from "react-icons/im";
import { VscLibrary } from "react-icons/vsc";
import Cta from "../cta";

import fr from "../../locales/fr";

function Section4() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 id="bilan" className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none xl:max-w-lg dark:text-white">
            Mesurer l'impact
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
Vos actions QVCT sont mesurables par vos collaborateurs individuellement et par la collectivité anonymement          </p>
        </div>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-2">
        <div>
          <Image
            src="/img/solution360/dashboard_01.jpg"
            width={500}
            height={300}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">Dashboard automatisé RH / Manager</h5>
          <p className="text-gray-700">
            Les données sont anonymisées.<br/>
            Graphiques vision d'ensemble et ROIste.<br/>
            Analyse détaillée.
          </p>
        </div>
        <div>
          <Image
            src="/img/solution360/dashboard_02.jpg"
            width={500}
            height={300}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Dashboard automatisé Collaborateur
          </h5>
          <p className="text-gray-700">
            Suivi de l'évolution individuelle.<br/>
            Pour action évolutifs.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col my-16 pb-0 items-center justify-center text-center">
        <div className="w-2/3">
          <Cta title={'Etes-vous prêt à onboarder vos collaborateurs?'} />
        </div>
      </div>
    </div>
  );
}

export default Section4;
