import React from "react";

import { usePlanetContext } from "../context/PlanetContext";

import "../App.css";

const Stats = () => {
  const { planetInfo } = usePlanetContext();

  /** This function creates a planet stats container.The function returns a div with the stat label 
  and the stat value. 
  @param planetStat - the key for the planetInfo object
  @param planetStatLabel - the label for the stat
  */
  const createStatBox = (planetStat, planetStatLabel) => {
    return (
      // add back pt-2
      <div className="border border-darkgrey w-full h-[80%] flex flex-col justify-center pl-5">
        <div className="text-m font-spartan text-grey ">{planetStatLabel}</div>
        <div className="text-4xl pt-1">
          {planetInfo[planetStat].toUpperCase()}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* bottom planet info 4x container */}
        {createStatBox("rotation", "ROTATION TIME")}
        {createStatBox("revolution", "REVOLUTION TIME")}
        {createStatBox("radius", "RADIUS")}
        {createStatBox("temperature", "AVERAGE TEMP.")}
    </>
  );
};

export default Stats;
