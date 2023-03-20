import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./ribbon.css";
import { useSelector, useDispatch } from "react-redux";
import SidePanel from "../SidePanel/SidePanel";
import Video from "../Video/Video";
import { getSuggestedVideos } from "../../action/videoApi";

function Ribbon() {
  const SuggestedVideos = useSelector((state) => state.videos);
  const [categorySelect, setCategorySelect] = useState("New");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestedVideos(categorySelect));
  }, [categorySelect]);

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
        <SidePanel
          setCategorySelect={setCategorySelect}
          categorySelect={categorySelect}
        />
        <Typography
          className="ribbon__copiright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copiright 2023 video-hosting
        </Typography>

        <Box pt={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {categorySelect} <span className="">video</span>
          </Typography>
          <Video />
        </Box>
      </Box>
    </Stack>
  );
}

export default Ribbon;
