import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 150, clear: "both", paddingTop: 50, textAlign: "center", 
     backgroundColor:"#d2cac7", 
   }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
