import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 10, padding:5, backgroundColor:"#584942", color:"white", 
  width:125, height:50 }} className="btn">
    {props.children}
  </button>
);
