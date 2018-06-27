import React from "react";
import "./SaveBtn.css";


const SaveBtn = props => (
  <button className="btn save-btn"
   {...props}
   style={{color:"#96230c"}}
   >
   Save for later
  </button>
);

export default SaveBtn;
