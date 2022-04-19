import { Avatar, Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const reviewers = [
  {
    name: "Siomo",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    join: 2020,
    reviews: 2,
    uploads: 10,
  },
  {
    name: "Steve",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet    explicabo laudantium at veritatis atque, possimus libero omnis eveniet",
    join: 2010,
    reviews: 300,
    uploads: 100,
  },
  {
    name: "Siomo",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    join: 2020,
    reviews: 2,
    uploads: 10,
  },
  {
    name: "Steve",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet    explicabo laudantium at veritatis atque, possimus libero omnis eveniet",
    join: 2010,
    reviews: 300,
    uploads: 100,
  },
];

export default function Reviews() {
  return (
    <Box width="100%">
      {reviewers.map((e, i) => (
        <Box key={i} display="flex" width="100%" mb="30px">
          <Avatar
            color="secondary"
            sx={{
              mr: "20px",
              color: "#44BFDF",
              bgcolor: "#BEE7F9",
              fontWeight: 700,
            }}
          >
            S
          </Avatar>
          <div>
            <Box display="flex" justifyContent="space-between" width="100%">
              <div>
                <Typography fontWeight={700} mt="8px" lineHeight="10px">
                  {e.name}
                </Typography>
                <Typography variant="caption">
                  Joined {e.join} - {e.reviews} reviews - {e.uploads} uploads
                </Typography>
              </div>
              <Stack direction="row">
                {[1, 2, 3, 4, 5].map((e) => (
                  <StarIcon
                    color="secondary"
                    key={e}
                    sx={{ fontSize: "16px" }}
                  />
                ))}
              </Stack>
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              reprehenderit est optio quis. Vitae, at, quaerat a sunt ad,
            </Typography>
            <Typography variant="caption">About a year ago</Typography>
          </div>
        </Box>
      ))}
      <Box display="flex" justifyContent="flex-end">
        <Button color="secondary" sx={{ textTransform: "none", fontSize: '20px' }}>
          Show More
        </Button>
      </Box>
    </Box>
  );
}
