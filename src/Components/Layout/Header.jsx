import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import StyleBtn from "../Button/StyleBtn";
import logo from "../../Images/logo.jpg";
import { Drawer, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        elevation={1}
        position="static"
        sx={{ backgroundColor: "transparent" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              display="flex"
              alignItems="center"
              mr="20px"
              flexGrow={{ xs: 1, md: 0 }}
            >
              <img src={logo} alt="logo" className="logo" />
              <StyleBtn text="Sell It" variant="contained" />
            </Box>
            <Box flexGrow={1} display={{ xs: "none", md: "block" }}>
              <TextField
                placeholder="search"
                sx={{ width: "calc(100% - 66px)" }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "56px",
                  height: "56px",
                  minWidth: "40px",
                  ml: "10px",
                }}
              >
                <SearchIcon />
              </Button>
            </Box>
            <Box flexGrow={0}>
              <Box display={{ xs: "block", md: "none" }}>
                <IconButton onClick={handleOpenNavMenu}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  PaperProps={{ className: "drawer" }}
                  anchor="right"
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  <Box width='fit-content'>
                  <Stack spacing={1}>
                    <Typography>Home</Typography>
                    <StyleBtn text="Log In" variant="outlined" />
                    <StyleBtn text="Sign up" variant="contained" />
                    <IconButton size="s">
                      <ShoppingBagOutlinedIcon />
                    </IconButton>
                  </Stack>
                  </Box>
                </Drawer>
              </Box>
              <Box display={{ xs: "none", md: "block" }}>
                <Stack direction="row" spacing={1}>
                  <Typography>Home</Typography>
                  <StyleBtn text="Log In" variant="outlined" />
                  <StyleBtn text="Sign up" variant="contained" />
                  <IconButton size="s">
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
