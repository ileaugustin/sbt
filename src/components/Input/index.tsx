import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";


const Input = ({ value, onChange }: TextFieldProps) => {
  return <TextField value={value} onChange={onChange} variant="standard" placeholder="Filter table" />
}

export default Input;
