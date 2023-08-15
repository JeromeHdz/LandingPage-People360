import React from "react";

function Stat() {
  return (
    <div className="stats w-5/6 stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title text-xl">Stress</div>
        <div className="stat-value text-indigo-600">-70%</div>
        {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
      </div>

      <div className="stat">
        <div className="stat-title text-xl">Turnover</div>
        <div className="stat-value text-indigo-600">-50%</div>
        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
      </div>

      <div className="stat">
        <div className="stat-title text-xl">REX</div>
        <div className="stat-value text-indigo-600">x2</div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>

      <div className="stat">
        <div className="stat-title text-xl">+ Motivés</div>
        <div className="stat-value text-indigo-600">89%</div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>
    </div>
  );
}

export default Stat;
