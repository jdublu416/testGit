import React from "react";

export const Input = props => (
  <div style={{marginLeft:25, marginRight:25, marginTop:25}}  className="form-group">
    <input className="form-control" {...props} />
  </div>
);
