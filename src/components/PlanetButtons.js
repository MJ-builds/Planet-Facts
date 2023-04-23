import React from "react";

import { usePlanetContext } from "../context/PlanetContext";

const ButtonsOverview = () => {
  const { planetInfo, activeButton, updateActiveButton } = usePlanetContext();

  //interim solution
  const handleButtonClick = (id) => {
    updateActiveButton(id); //check
  };

  /** this function creates the buttons for the overview, internal structure and surface geology 
  and takes in 3 parameters: 
 * @param activeButtonNum - the currently selected and active button
 * @param buttonNum - the number label of your button (such as 01)
 * @param buttonLabel - the label of your button (such as OVERVIEW)
 */
  const createButton = (activeButtonNum, buttonNumLabel, buttonLabel) => {
    return (
      <div className = 'border border-darkgrey flex h-[30%] min-h-[50px]'>
        <button
          className={`text-left text-sm font-medium w-full tracking-widest ${activeButton === activeButtonNum ? "active" : ""}`}
          onClick={() => handleButtonClick(activeButtonNum)}
          style={{
            backgroundColor:
              activeButton === activeButtonNum ? planetInfo.button_color : "",
            borderColor:
              activeButton === activeButtonNum ? planetInfo.button_color : "",
          }}
        >
          <span className="text-left text-sm text-grey tracking-widest ml-5 mr-5 button_numbers">{buttonNumLabel}</span> {buttonLabel}
        </button>
        </div>
    );
  };

  return (
    <>
    {/* create the buttons you need - see function desc above */}
      {createButton(0, "01", "OVERVIEW")}
      {createButton(1, "02", "INTERNAL STRUCTURE")}
      {createButton(2, "03", "SURFACE GEOLOGY")}
    </>
  );
};

export default ButtonsOverview;
