"use client";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

const Slidercomponent = () => {
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter1 = (index) => {
    setShowImage1(true);
  };

  const handleMouseLeave1 = () => {
    setShowImage1(false);
  };

  const handleMouseEnter2 = (index) => {
    setShowImage2(true);
    setShowImage1(false);
  };

  const handleMouseLeave2 = () => {
    setShowImage2(false);
  };

  const handleMouseEnter3 = (index) => {
    setShowImage3(true);
    setShowImage1(false);
  };

  const handleMouseLeave3 = () => {
    setShowImage3(false);
  };

  return (
    <>
      <Box display="flex" flexDirection="row">
        <Box sx={{ padding: "50px" }}>
          <Box  >
            <Typography
              variant="h4"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Payout Solution
            </Typography>
          </Box>
          {showImage1 === false ? (
            <Box></Box>
          ) : (
            <img
              src={`sld1.jpg`}
              alt={`Slide1`}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Box>

        <Box sx={{ padding: "50px" }}>
          <Typography
            variant="h4"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Payment Collection Solution
          </Typography>
          {showImage2 === false ? (
            <Box></Box>
          ) : (
            <img
              src={`sld2.jpg`}
              alt={`Slide2`}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Box>

        <Box sx={{ padding: "50px" }}>
          <Typography
            variant="h4"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            Contact Less Onboarding
          </Typography>
          {showImage3 === false ? (
            <Box></Box>
          ) : (
            <img
              src={`sld3.jpg`}
              alt={`Slide3`}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Slidercomponent;
