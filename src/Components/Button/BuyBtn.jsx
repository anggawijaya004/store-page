import Button from "@mui/material/Button";
import React from "react";

export default function BuyBtn(props) {
  return (
    <Button
      fullWidth
      varian={props.variant}
      sx={{
        boxShadow: "none",
        textTransform: "none",
        bgcolor: "#FE5720",
        color: "white",
        fontSize: "20px",
        fontWeight: 700,
        height: "60px",
        ":hover": { bgcolor: "#FE5720", color: "white" },
      }}
    >
      {props.text}
    </Button>
  );
}
