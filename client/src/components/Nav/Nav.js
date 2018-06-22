import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div id="textContainer" className="navbar-default" href="/">
      <h1>New York Times Article Scrubber</h1>
      <h4>search for and annotate articles of interest!</h4> 
    </div>
  </nav>
);

export default Nav;
