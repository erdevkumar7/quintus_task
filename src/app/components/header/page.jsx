import { Box, Grid, AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* Logo on the left */}
          <Grid item xs={2}>
            <img
              src={"quin1.jpeg"}
              alt="Logo"
              style={{ width: "30%", height: "auto" }}
            />
          </Grid>

          {/* Navigation links in the middle */}
          <Grid container item xs={8} justifyContent="center">
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Product</Button>
            <Button>Career</Button>
          </Grid>

          {/* Contact section on the right */}
          <Grid container item xs={2} justifyContent="flex-end">
            <Button
              sx={{
                borderRadius: "30%",
                border: "2px solid black",
              }}
            >
              Contact Us
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
