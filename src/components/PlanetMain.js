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

  // make sure info loads before rendering - improve with loading state in context in future
  if (!planetInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className = 'custom-grid '>
      <div className="row-span-1 col-span-6 w-full">
        <Header />
      </div>
      <div className = "row-start-2 row-end-2 col-start-2 col-end-5 flex justify-center items-center">
        <PlanetImager />
      </div>
      <div className="row-start-2 row-end-3 col-start-5 col-end-6 flex items-center w-full">
        <PlanetInformation />
      </div>
      <div className = "row-start-3 row-end-3 col-start-2 col-end-6 flex items-start justify-self-end w-[100%] gap-8">
      <PlanetStats />
      </div>
      </div>
    </>
  );
};

export default PlanetMain;
