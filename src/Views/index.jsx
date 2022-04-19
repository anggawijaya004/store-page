import { Box, Grid, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Header from "../Components/Layout/Header";

//icon
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import BuyBtn from "../Components/Button/BuyBtn";
import AddWishList from "../Components/Button/AddWishList";
import Reviews from "../Components/Reviews";
import InfoReturn from "../Components/InfoReturn";
import ImageList from "../Components/ImageList";

export default function Index() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box p={{ xs: "8px", md: "16px", textAlign: "left" }}>
              <ImageList />
              <Typography variant="h6" fontWeight={700} mt='20px'>
                Description
              </Typography>
              <Typography variant="body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                autem quas quos placeat. Inventore eos, assumenda fuga enim
                tenetur error quod doloribus similique dolores asperiores
                doloremque illo eveniet esse. Voluptate! <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus magni facere earum soluta facilis omnis atque eos id
                deserunt voluptates, repellat alias velit ipsam quaerat maiores!
                Excepturi quo autem blanditiis? <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta, ut iusto! Illum distinctio, quidem necessitatibus
                provident quam facilis harum similique repellendus cupiditate
                fuga voluptatibus eveniet minima tempora praesentium incidunt
                delectus.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus magni facere earum soluta facilis omnis atque eos id
                deserunt voluptates, repellat alias velit ipsam quaerat maiores!
                Excepturi quo autem blanditiis? <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta, ut iusto! Illum distinctio, quidem necessitatibus
                provident quam facilis harum similique repellendus cupiditate
                fuga voluptatibus eveniet minima tempora praesentium incidunt
                delectus.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box p={{ xs: "8px", md: "16px", textAlign: "left" }}>
              <Typography variant="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                ad, facilis provident necessitatibus expedita voluptatibus! Quo
                consequuntur deserunt a eligendi possimus blanditiis,
              </Typography>
              <Stack
                direction="row"
                spacing="4px"
                alignItems="center"
                my="12px"
              >
                {[1, 2, 3, 4, 5].map((e) =>
                  e === 5 ? (
                    <StarOutlineIcon key={e} color="info" />
                  ) : (
                    <StarIcon key={e} color="info" />
                  )
                )}
                <Typography variant="caption" color="secondary">
                  (134 reviews)
                </Typography>
              </Stack>
              <Typography fontSize="22px" fontWeight={700}>
                $ 480
              </Typography>
              <Typography variant="caption">VAT Include</Typography>
              <Box my="40px">
                <BuyBtn text="Buy" variant="contained" />
                <AddWishList />
              </Box>
              <Reviews />
              <InfoReturn />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
