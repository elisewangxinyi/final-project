import React from "react";
import {Link} from 'react-router-dom';

import "./Navbar.css";
  
const Navbar = () => {
  return (
    <nav>
      <button id="about">ABOUT</button>

      <div>
        <Link to="/home">
            <button>HOME</button>
        </Link>
        <Link to="/timeline">
            <button>TIMELINE</button>
        </Link>
        <Link to="/projects">
            <button>PROJECT LIST</button>
        </Link>
      </div>
      
    </nav>
    

  );
};
  
export default Navbar;