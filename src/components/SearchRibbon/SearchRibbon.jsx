import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Video from "../Video/Video";
import { useParams } from "react-router-dom";

function SearchRibbon() {
  const searchVideos = useSelector((state) => state.videos.searchVideos);
  const { searchTerm } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {}, [searchTerm]);

  return (
    <Box pt={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span className="">{searchTerm}</span> videos
      </Typography>
      <Video videos={searchVideos} />
    </Box>
  );
}

export default SearchRibbon;
