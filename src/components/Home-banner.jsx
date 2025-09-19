import React from "react";
import { Button, Box, Typography } from "@mui/material";

function HomeBanner() {
  return (
    <Box
      sx={{

        position: "relative",
        height: "150vh",
        backgroundImage: `url("https://cdn.shopify.com/s/files/1/0732/9080/9596/files/ChatGPT_Image_Sep_15_2025_02_23_47_PM.png?v=1757926443")`, // trekking bg
        backgroundSize: "cover ",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        
      }}
    >
      {/* Overlay for better text contrast */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // background: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            background: "linear-gradient(90deg,#00c6ff,#0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {/* Explore the Mountains */}
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          {/* Join us on unforgettable trekking adventures across the world. */}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(90deg,#ff6a00,#ee0979)",
            color: "#fff",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            transition: "0.3s",
            "&:hover": {
              background: "linear-gradient(90deg,#ee0979,#ff6a00)",
              transform: "scale(1.05)",
            },
          }}
        >
          Find Your Next Summit
        </Button>
      </Box>
    </Box>
  );
}

export default HomeBanner;
