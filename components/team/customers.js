import React from "react";
import Image from "next/image";

function Customers() {
  return (
    <div className="grid w-full gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto ">
      <Image
        src="/img/team/fixed/afpa.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
      <Image
        src="/img/team/fixed/decathlon.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
      <Image
        src="/img/team/fixed/orano.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
      <Image
        src="/img/team/fixed/adp.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
      <Image
        src="/img/team/fixed/pnco.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
      <Image
        src="/img/team/fixed/mdp.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
      <Image
        src="/img/team/fixed/cci.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
      <Image
        src="/img/team/fixed/bpi.png"
        alt="P"
        width="250"
        height="150"
        className="transform hover:scale-105 grayscale hover:grayscale-0 transition-transform transition-filter"
      />
    </div>
  );
}

export default Customers;
