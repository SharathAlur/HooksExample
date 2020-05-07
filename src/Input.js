import React from "react";
import TextField from "@material-ui/core/TextField";

export default props => (
  <div style={{ paddingBottom: "5px" }}>
    <TextField value={props.value} onChange={props.onChange} />
  </div>
);
