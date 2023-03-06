import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <div className="logo">
        <Link to="/">
          <h1>MON LOGO</h1>
        </Link>
      </div>
      <div className="favoris">
        <Link to="/favoris">
          <button>Mes Favoris</button>
        </Link>
      </div>

      <div className="favoris"></div>
    </div>
  );
};

export default Navbar;
