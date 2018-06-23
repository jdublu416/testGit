import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 150, clear: "both", paddingTop: 50, textAlign: "center", 
     backgroundColor:"#d2cac7", margin: -10 -10
   }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
