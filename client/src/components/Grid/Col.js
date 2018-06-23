import React from "react";

export const Col = ({ size, children }) => (
  <div style={{margin:0, padding:0}} className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);
