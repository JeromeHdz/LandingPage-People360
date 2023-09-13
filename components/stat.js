import React from "react";
import { getNotionContentBlockById } from "../utils";
import fr from "../locales/fr";

function Stat({ data }) {
  return (
    <div className="w-5/6 shadow-lg flex flex-wrap">
      {fr.LandingPage.statSection.stats.map((el, index) => (
        <div className={'stat w-full md:w-1/2 lg:w-1/5 p-2'} key={index}>
          <div className="stat-title text-xl" dangerouslySetInnerHTML={{ __html: el.title }}></div>
          <div className="stat-value ">{el.data}</div>
        </div>
      ))}
    </div>

  );
}

export default Stat;
