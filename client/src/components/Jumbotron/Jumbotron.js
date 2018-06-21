import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 200, clear: "both", paddingTop: 120, textAlign: "center", 
    marginLeft: 25, marginRight:25 }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
