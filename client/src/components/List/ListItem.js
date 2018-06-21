import React from "react";

export const ListItem = props => (
//list for results box
<ul className="list-group">
{props.results.map(result => (
  <li className="list-group-item" key={result.id}>
    <img
      alt={result.title}
      className="img-fluid"
      src={result.images.original.url}
    />
  </li>
))}
</ul>
);

  // <li className="list-group-item">
  //   {props.children}
  // </li>