import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./ribbon.css";

function Ribbon() {
  return (
    <Stack
      className="ribbon"
      sx={{ flexDirection: { sx: "column", md: "row" } }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <Typography
          className="ribbon__copiright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copiright 2023 video-hosting
        </Typography>
      </Box>
    </Stack>
  );
}

export default Ribbon;
