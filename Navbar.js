import React from "react";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import "../components/Navbar.css";
import ShowPage from "../pages/Show-Page";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <h1>Hello Navbar</h1>
        <div className="links-wrapper"></div>
      </div>
    </div>
  );
};

export default Navbar;
