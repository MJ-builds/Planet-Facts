import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { usePlanetContext } from "../context/PlanetContext";

import PlanetStats from "./PlanetStats";
import PlanetImager from "./PlanetImager";
import PlanetInformation from "./PlanetInformation";

import "../App.css";

const PlanetMain = () => {
  const { planetInfo, updateActivePlanet, activeButton, updateActiveButton } =
    usePlanetContext();
  const { activePlanet } = useParams();

  /* This useEffect is called whenever the activePlanet from useParams or the updateActivePlanet function from the context changes.
 It ensures that the activePlanet value in the PlanetContext is always updated with the current activePlanet value from useParams. */
  useEffect(() => {
    updateActivePlanet(activePlanet);
  }, [activePlanet, updateActivePlanet]);

  /* This useEffect is called whenever the activeButton from the context changes. It ensures that the activeButton value in the 
  PlanetContext is always updated with the current activeButton value from the context. */
  useEffect(() => {
    updateActiveButton(activeButton);
  }, [activeButton, updateActiveButton]);

  // make sure info loads before rendering - could be improved with async await
  if (!planetInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="main-container">
        <PlanetImager />
        <div className="planet-info-container">
          <PlanetInformation />
        </div>
        <PlanetStats />
      </div>
    </>
  );
};

export default PlanetMain;
