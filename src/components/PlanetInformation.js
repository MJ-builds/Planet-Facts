import React from "react";
import { Link } from "react-router-dom";

import { usePlanetContext } from "../context/PlanetContext";

import PlanetButtons from "./PlanetButtons";

const PlanetInformation = () => {
  const { planetInfo, activeButton, buttonCategory } = usePlanetContext();

  return (
    <div className="INFO-CONTAINER custom-grid-pi gap-10 min-h-[420px]">
      <h1 className="HEADING row-span-1 col-span-1 flex items-end text-6xl -mb-5">
        {planetInfo.name.toUpperCase()}
      </h1>
      <p className="INFO font-spartan row-start-2 row-end-2 col-start-1 col-end-1 flex items-center text-grey text-sm">
        {planetInfo[`${buttonCategory[activeButton]}_content`]}
      </p>
      <p className="SOURCE text-darkgrey font-spartan row-start-3 row-end-3 col-start-1 col-end-1 flex items-center -mt-10">
        Source:{" "}
        <Link
          className="wiki-link flex items-center underline decoration-darkgrey text-grey ml-4"
          to={planetInfo.overview_source}
          target="_blank"
        >
          Wikipedia
          <svg
            className="source-icon-svg inline ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </Link>
      </p>
      <div className="row-start-4 row-end-4 col-start-1 col-end-1 flex flex-col font-spartan gap-3 -mt-10">
        <PlanetButtons />
      </div>
    </div>
  );
};

export default PlanetInformation;
