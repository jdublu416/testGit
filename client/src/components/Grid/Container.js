import React from "react";

export const Container = ({ fluid, children }) => (
  <div style={{margin:0, padding:0}} className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
