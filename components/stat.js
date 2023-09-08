import React from "react";
import { getNotionContentBlockById } from "../utils";
import fr from "../locales/fr";

function Stat({ data }) {
  return (
    <div className=" w-5/6 shadow-lg flex flex-wrap">
      {fr.LandingPage.statSection.stats.map((el, index) => (
        <div className={'stat w-1/5'} key={index}>
          <div className="stat-title text-xl" dangerouslySetInnerHTML={{ __html: el.title }}></div>
          <div className="stat-value text-indigo-600">{el.data}</div>
        </div>
      ))}
    </div>
  );
}

export default Stat;
