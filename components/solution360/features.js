import React from "react";

import { IconContext } from "react-icons";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

function Features() {
  return (
    <div className="py-16 px-8 md:px-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2
            id="bilan"
            className="max-w-md mb-6 font-sans font-bold tracking-tight sm:text-5xl sm:leading-none xl:max-w-lg "
          >
            Faites le bilan
          </h2>

          <p className="text-base  md:text-3xl ">
            Définissez vos enjeux prioritaires grâce à un audit de vos
            collaborateurs!
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-2">
        <div>
          <h6 className="mb-2 font-semibold leading-5 ">
            Audit global quantitatif et qualitatif
          </h6>
          <ul class="list-disc px-6">
            <li className="mb-3 text-xl ">
              Plan d'action, propositions d'outils et solutions adaptées <br />
            </li>
            <li className="mb-3 text-xl ">
              Plan de communication et guides dédiés
            </li>

            <li className="mb-3 text-xl ">
              Géré intégralement par notre équipe experte
            </li>
            <li className="mb-3 text-xl">
              Idéal pour avoir une vision d'ensemble des collaborateurs d'une{" "}
              <br /> entreprise et démarrer une action à l'échelle
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5 ">
            Micro-audits assistés actionnables par les managers
          </h6>
          <ul class="list-disc px-6">
            <li className="mb-3 text-xl ">
              Des templates formatés par thématique auditée <br />
            </li>
            <li className="mb-3 text-xl">Templates personnalisables</li>
            <li className="mb-3 text-xl ">
              Un assistant virtuel pour vous accompagner dans la configuration
            </li>
            <li className="mb-3 text-xl ">
              Idéal pour prendre le pouls d'une équipe - simplicité de mise en
              oeuvre pour le manager
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
