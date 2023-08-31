import React from "react";
import { getNotionContentBlockById } from "../utils";
import fr from "../locales/fr";

function Stat({ data }) {
  console.log(fr.LandingPage.statSection.stats);
  return (
    <div className="stats w-5/6 stats-vertical lg:stats-horizontal shadow">
      {fr.LandingPage.statSection.stats.map((el, index) => (
        <div className="stat" key={index}>
          <div className="stat-title text-xl">{el.title}</div>
          <div className="stat-value text-indigo-600">{el.data}</div>
        </div>
      ))}
    </div>
  );
}

export default Stat;
