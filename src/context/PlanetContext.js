import { createContext, useContext, useState, useEffect } from "react";

const PlanetContext = createContext();

export const usePlanetContext = () => useContext(PlanetContext);

export const PlanetProvider = ({ children }) => {
  const [planetData, setPlanetData] = useState([]);
  const [planetInfo, setPlanetInfo] = useState(null);
  const [activePlanet, setActivePlanet] = useState(null);
  const [activeButton, setActiveButton] = useState(0);

  const buttonCategory = ["overview", "structure", "geology"];

  // simple function to update the active planet state
  const updateActivePlanet = (planet) => {
    setActivePlanet(planet);
  };

  //simple function to update the active button state
  const updateActiveButton = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setPlanetData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlanetData();
  }, []);

  useEffect(() => {
    if (planetData.length > 0 && activePlanet) {
      const filteredPlanets = planetData.filter(
        (planet) => planet.name.toLowerCase() === activePlanet.toLowerCase()
      );

      const mappedPlanetInfo = filteredPlanets.map((planet) => ({
        name: planet.name,
        overview_content: planet.overview.content,
        overview_source: planet.overview.source,
        structure_content: planet.structure.content,
        structure_source: planet.structure.source,
        geology_content: planet.geology.content,
        geology_source: planet.geology.source,
        rotation: planet.rotation,
        revolution: planet.revolution,
        radius: planet.radius,
        temperature: planet.temperature,
        image_overview: planet.images.planet,
        image_structure: planet.images.internal,
        image_geology: planet.images.geology,
        button_color: planet.color,
      }));

      if (mappedPlanetInfo.length > 0) {
        setPlanetInfo(mappedPlanetInfo[0]);
      }
    }
  }, [planetData, activePlanet]);

  return (
    <PlanetContext.Provider
      value={{
        planetData,
        planetInfo,
        updateActivePlanet,
        activeButton,
        updateActiveButton,
        buttonCategory,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};
