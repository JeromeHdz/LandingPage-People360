import React from "react";

function Social_Ambition() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-5xl mt-3 text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-5xl ">
          Une ambition sociétale
        </h2>
        <p className="text-xl md:text-2xl">
          Accompagner chaque transition de vie du collaborateur afin d’améliorer
          la performance de l’entreprise et le bien-être des équipes.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-dark-cerulean hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-xl">
              Bien-être au travail et santé mentale
            </h6>
            <ul className="list-disc pl-3">
              <li className="py-4">
                Faciliter l'équilibre vie personnelle/professionnelle des collaborateurs
              </li>
              <li className="py-2">
                Enrayer les arrêts de carrière et démissions liées à une incompatibilité de la situation de vie personnelle (aidant, handicap, maladie, seniors) avec les attentes professionnelles
              </li>
              {/* <li className="py-4">
          Un bon équilibre permet de diminuer de 14% les dépenses de santé
        </li> */}
            </ul>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-dark-cerulean hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-xl">
              Continuité dans la vie active, retour à l'emploi
            </h6>

            <ul className="list-disc pl-3">

              <li className="py-4">
                Faciliter la continuité et le retour à l'emploi, après une pause d'activité (maternité...)
              </li>
              <li className="py-4">
                Faciliter la réinsertion dans le monde du travail pour tous les publics, même fragilisés (monoparentalité...)
              </li>
            </ul>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-dark-cerulean hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-xl">
              Egalité Homme-Femme
            </h6>
            <ul className="list-disc pl-3">
              <li className="py-4">
                Favoriser l'équité et l'égalité : maternité, parentalité, séparation ou reconversion des parents
              </li>
            </ul>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-dark-cerulean hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5 text-xl">
              Culture d'entreprise inclusive
            </h6>
            <ul className="list-disc pl-3">
              <li className="py-4">
                Favoriser l’appropriation par tous les collaborateurs d’une culture d’entreprise inclusive, qui transforme les transitions en opportunités pour l’employeur et les salariés.
              </li>
              <li className="py-4">
                Permettre à tous les publics, les plus fragiles et/ou en reconversion de bénéficier d'un accompagnement individualisé
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Social_Ambition;
