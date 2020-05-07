import React from "react";

export default props => (
  <div style={{ marginTop: "10px" }}>
    <label htmlFor={props.label}>{props.label}</label>
    <br />
    {props.children}
    <hr />
  </div>
);
