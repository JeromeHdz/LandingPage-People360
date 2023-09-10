import React from "react";

function Social_Ambition() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Une ambition sociétale
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Accompagner chaque transition de vie du collaborateur afin d’améliorer
          la performance de l’entreprise et le bien-être des équipes.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-blue-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Bien-être au travail et santé mentale
            </h6>
            <ul className="list-disc pl-3">
              <li className="py-4">
                Faciliter l'équilibre vie personnelle/professionnelle des
                collaborateurs
              </li>
              <li className="py-4">
                Un bon équilibre permet de diminuer de 14% les dépenses de santé
              </li>
            </ul>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-blue-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Continuité dans la vie active, retour à l'emploi
            </h6>

            <ul className="list-disc pl-3">
              <li className="py-2">
                Enrayer les arrêts de carrière trop longs, et démissions liées à
                une incompatibilité de la situation de vie personnelle (aidant,
                handicap, maladie, seniors) avec les attentes professionnelles
              </li>
              <li className="py-4">
                Faciliter la continuité et le retour à l'emploi, après une pause
                d'activité (maternité...)
              </li>
              <li className="py-4">
                Faciliter la réinsertion dans le monde du travail pour tous les
                publics, même fragilisés (monoparentalité...)
              </li>
            </ul>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-blue-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Egalité Homme-Femme
            </h6>
            <ul className="list-disc pl-3">
              <li className="py-4">
                Favoriser l'équité et l'égalité : maternité, parentalité,
                séparation ou reconversion des parents
              </li>
            </ul>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:border-l-blue-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Culture d'entreprise inclusive
            </h6>
            <ul className="list-disc pl-3">
              <li className="py-4">
                Nous facilitons l’appropriation par tous les collaborateurs
                d’une culture d’entreprise inclusive, qui transforme les
                transitions en opportunités pour l’employeur et les salariés.
              </li>
              <li className="py-4">
                Nous ciblons tous les publics, les plus plus fragiles et/ou en
                reconversion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social_Ambition;
