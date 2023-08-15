import React from "react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import fr from "../locales/fr";
import Container from "./container";

const Cta = () => {
  return (
    <a
      href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
      target="_blank"
      rel="noopener"
      className="w-3/5 px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
    >
      {fr.Global.cta}
    </a>
  );
};

export default Cta;
