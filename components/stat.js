import React from "react";
import { getNotionContentBlockById } from "../utils";

function Stat({ data }) {
  console.log(data);
  return (
    <div className="stats w-5/6 stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title text-xl">
          {getNotionContentBlockById(data, "3577b5d1d4ce45cca10314c60f4c85d7")}
        </div>
        <div className="stat-value text-indigo-600">
          {getNotionContentBlockById(data, "b563ff5daab5408f8708e5f9ac45512d")}
        </div>
        {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
      </div>

      <div className="stat">
        <div className="stat-title text-xl">
          {getNotionContentBlockById(data, "cf92e133ec8c440096b956c717b135ba")}
        </div>
        <div className="stat-value text-indigo-600">
          {getNotionContentBlockById(data, "569eb2f97e61441ebd983aefb77ad50b")}
        </div>
        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
      </div>

      <div className="stat">
        <div className="stat-title text-xl">
          {getNotionContentBlockById(data, "e2812d7b3453423a9370990de3a06444")}
        </div>
        <div className="stat-value text-indigo-600">
          {getNotionContentBlockById(data, "87fc1ac97de045e690c0c60ee97b3d64")}
        </div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>

      <div className="stat">
        <div className="stat-title text-xl">
          {getNotionContentBlockById(data, "454844d5dc9f45fb8467a439aa200a03")}
        </div>
        <div className="stat-value text-indigo-600">
          {getNotionContentBlockById(data, "01a090b80fed4e3090efc749fb0c67c8")}
        </div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>
    </div>
  );
}

export default Stat;
