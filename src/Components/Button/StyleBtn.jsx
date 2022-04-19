import Button from "@mui/material/Button";
import React from "react";

export default function StyleBtn(props) {
  return (
    <Button variant={props.variant} sx={{ borderRadius: "10px", boxShadow:'none', textTransform:'none', height:'37px' }}>
      {props.text}
    </Button>
  );
}
