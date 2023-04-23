import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Header = () => {
  

  return (
    <header>
    <div className="MAIN flex w-full h-[79px] border-b border-grey justify-between items-center">
      <h2 className = "TITLE text-3xl ml-10 font-medium">THE PLANETS</h2>
      <div >
        <nav className = 'NAV font-spartan text-grey mr-10 text-sm font-semibold'> 
        {/* may have to amend to NavLink and then pass value of target.value to then search for correct json data 
        Maybe improve later on - seems repetitive */}

            <Link to= "/planets/mercury" >MERCURY</Link>
            <Link to= "/planets/venus">VENUS</Link>
            <Link to= "/planets/earth">EARTH</Link>
            <Link to= "/planets/mars">MARS</Link>
            <Link to= "/planets/jupiter">JUPITER</Link>
            <Link to= "/planets/saturn">SATURN</Link>
            <Link to= "/planets/uranus">URANUS</Link>
            <Link to= "/planets/neptune">NEPTUNE</Link>

        </nav>
        
      </div>
    </div>
    </header>
  );
};

export default Header;
