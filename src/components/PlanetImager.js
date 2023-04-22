import React from "react";

import { usePlanetContext } from "../context/PlanetContext";

const PlanetImager = () => {
  const { planetInfo, activeButton, buttonCategory } = usePlanetContext();

  return (
    <>
      <div className="">
        <img
          className="planet-image"
          src={
            activeButton !== 2
              ? planetInfo[`image_${buttonCategory[activeButton]}`]
              : planetInfo.image_overview
          }
          alt={`${planetInfo.name} planet`}
        />
        {activeButton === 2 ? (
          <img
            className="planet-image planet-image-geology"
            src={planetInfo.image_geology}
            alt={`${planetInfo.name} geology`}
          />
        ) : null}
      </div>
    </>
  );
};

export default PlanetImager;
