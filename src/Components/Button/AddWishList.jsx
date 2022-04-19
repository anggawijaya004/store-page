import React from "react";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";

export default function AddWishList() {
  return (
    <Button fullWidth sx={{ height: "60px", textTransform: "none", color:'#939D9E'}}>
      <FavoriteBorderIcon />
      <Typography ml='10px'>Add to WishList</Typography>
    </Button>
  );
}
