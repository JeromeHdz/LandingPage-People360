import React from "react";
import Cta from "../cta";

function Values() {
  return (
    <>
      <div className=" py-16 w-full lg:py-20 ">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-5 text-blue-700">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-4xl xl:text-4xl">
              Ecoute
            </h6>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-3xl font-bold lg:text-4xl xl:text-4xl">
              Agilité
            </h6>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-3xl font-bold lg:text-4xl xl:text-4xl">
              Performance
            </h6>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-3xl font-bold lg:text-4xl xl:text-4xl">
              Inclusion
            </h6>
          </div>
          <div className="text-center">
            <h6 className="text-xl font-bold lg:text-2xl xl:text-4xl">
              Excellence
            </h6>
          </div>
        </div>
      </div>
      <Cta title={"Embarquez pour une démo!"} />
    </>
  );
}

export default Values;
