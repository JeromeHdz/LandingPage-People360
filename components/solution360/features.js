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
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Fixons ensemble vos enjeux prioritaires grâce à un audit de vos
            collaborateurs!
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-2">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <IconContext.Provider
              value={{
                color: "#4F46E5",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <BsFullscreen />
            </IconContext.Provider>
          </div>
          <h6 className="mb-2 font-semibold leading-5 dark:text-white">
            Audit global quantitatif et qualitatif
          </h6>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            Plan d'action, propositions d'outils et solutions adaptées <br />
            Plan de communication et guides dédiés
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            Géré intégralement par notre équipe experte.
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            Idéal pour avoir une vision d'ensemble des collaborateurs d'une{" "}
            <br /> entreprise et démarrer une action à l'échelle.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <IconContext.Provider
              value={{
                color: "#4F46E5",
                size: "2em",
                className: "global-class-name",
              }}
            >
              <BsFullscreenExit />
            </IconContext.Provider>
          </div>
          <h6 className="mb-2 font-semibold leading-5 dark:text-white">
            Micro-audits assistés actionnables par les managers.
          </h6>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            Des templates formatés par thématique auditée. <br />
            Personnalisation des templates.
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            Un assistant virtuel pour vous accompagner dans la configuration
          </p>
          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            Idéal pour prendre le pouls d'une équipe - simplicité de mise en
            oeuvre pour le manager.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
