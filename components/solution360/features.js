import React from "react";

import { IconContext } from "react-icons";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

function Features() {
  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2
            id="bilan"
            className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none xl:max-w-lg dark:text-white"
          >
            Faites le bilan
          </h2>
        
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Fixons ensemble vos enjeux prioritaires grâce à un audit de vos
            collaborateurs!
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-2">
        <div>
          <h6 className="mb-2 font-semibold leading-5 dark:text-white">
            Audit global quantitatif et qualitatif
          </h6>
          <ul class="list-disc">
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Plan d'action, propositions d'outils et solutions adaptées <br />
              
            </li>
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Plan de communication et guides dédiés
            </li>
            
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Géré intégralement par notre équipe experte

            </li>
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Idéal pour avoir une vision d'ensemble des collaborateurs d'une{" "}
              <br /> entreprise et démarrer une action à l'échelle
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5 dark:text-white">
            Micro-audits assistés actionnables par les managers
          </h6>
          <ul class="list-disc">
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Des templates formatés par thématique auditée <br />
            </li>
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Templates personnalisables
            </li>
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
              Un assistant virtuel pour vous accompagner dans la configuration


            </li>
            <li className="mb-3 text-sm text-gray-900 dark:text-gray-300">
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
