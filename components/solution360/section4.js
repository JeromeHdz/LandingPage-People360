import React from "react";

import Image from "next/image";

import { IconContext } from "react-icons";
import { ImBubbles4 } from "react-icons/im";
import { VscLibrary } from "react-icons/vsc";
import CtaSolution from "../ctaSolution";

import fr from "../../locales/fr";

function Section4() {
  return (
    <div className="py-16 w-full md:px-24 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="" id="former-collectivement">
          <h2
            id="bilan"
            className="max-w-5xl mt-3 text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-5xl "
          >
            Mesurer l'impact
          </h2>

          <p className="max-w-4xl pt-6 mt-3 text-lg leading-normal lg:text-xl xl:text-3xl ">
            Vos actions QVCT sont mesurables par vos collaborateurs
            individuellement et par la collectivité anonymement
          </p>
        </div>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-2 ">
        <div>
          <Image
            src="/img/solution360/dashboard_01.jpg"
            width={300}
            height={200}
            alt=""
            className="mx-auto shadow-2xl rounded-2xl overflow-hidden"
          />
          <h5 className="mb-2 pt-8 text-xl font-bold leading-none sm:text-2xl">
            Dashboard RH / Manager
          </h5>
          <p className="">
            Données sont anonymisées.
            <br />
            Reporting visuel détaillé et ROIste.
          </p>
        </div>
        <div>
          <Image
            src="/img/solution360/dashboard_02.jpg"
            width={300}
            height={200}
            alt=""
            className="mx-auto shadow-2xl rounded-2xl overflow-hidden"
          />
          <h5 className="mb-2 pt-8 text-xl font-bold leading-none sm:text-2xl">
            Dashboard Collaborateur
          </h5>
          <p className="">
            Suivi de l'évolution individuelle.
            <br />
            Pour action évolutifs.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 mx-auto justify-center items-center">
        <CtaSolution title={"Un atelier à organiser?"} />
      </div>
    </div>
  );
}

export default Section4;
