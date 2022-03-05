import { TextField } from "@material-ui/core";
import React, { forwardRef } from "react";

const MuiField = (props, ref) => {
  return (
    <TextField {...props} inputRef={ref} label="Telefone" variant="outlined" />
  );
};

export default forwardRef(MuiField);