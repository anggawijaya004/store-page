import { Box, Button, Typography } from "@mui/material";
import React from "react";
import secur from "../Images/secur.jpg";

export default function InfoReturn() {
  return (
    <div>
      <Typography variant="h6" fontWeight={700}>
        30 Day Return & Refund
      </Typography>
      <Box
        mt="20px"
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box mr="16px">
          <img src={secur} width="40px" />
        </Box>
        <div>
          <Typography fontWeight={600}>Shop with Confidencel</Typography>
          <Typography mt='12px'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            voluptas corporis, eveniet culpa provident debitis eius ratione vel
            error? Quas deleniti corporis incidunt fuga animi illum! Quae
            commodi modi asperiores!
          </Typography>
        </div>
        <Button
          color="secondary"
          sx={{ textTransform: "none", minWidth: "fit-content" }}
        >
          Learn More
        </Button>
      </Box>
    </div>
  );
}
