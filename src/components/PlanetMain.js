import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { usePlanetContext } from "../context/PlanetContext";

import PlanetStats from "./PlanetStats";
import PlanetImager from "./PlanetImager";
import PlanetInformation from "./PlanetInformation";
import Header from "./Header";

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
    <div className = 'custom-grid'>
      <div className="row-span-1 col-span-5 border-white border">
        <Header />
      </div>
      <div className="scale-75 row-start-2 row-end-2 col-span-3 border-white border flex justify-around items-center">
        <PlanetImager />
      </div>
      <div className="row-start-2 row-end-3 col-start-4 col-end-4 border-white border flex items-center justify-items-center">
        <PlanetInformation />
      </div>
      <div className = "row-start-3 row-end-3 col-start-1 col-end-5 border-white border flex justify-around items-center">
      <PlanetStats />
      </div>
      </div>
    </>
  );
};

export default PlanetMain;
