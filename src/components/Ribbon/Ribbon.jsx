import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./ribbon.css";
import { useSelector, useDispatch } from "react-redux";
import SidePanel from "../SidePanel/SidePanel";
import Video from "../Video/Video";
import { getSuggestedVideos } from "../../api/videoApi";
import { addSuddestedVido } from "../../reduser/videosReduser";

function Ribbon() {
  const suggestedVideos = useSelector(
    (state) => state.videos.suddestedVidos?.items
  );
  const searchTerm = useSelector((state) => state.videos.searchTerm);
  const region = useSelector((state) => state.videos.regionCode);

  const [categorySelect, setCategorySelect] = useState("New");
  const dispatch = useDispatch();

  useEffect(() => {
    getSuggestedVideos(!!searchTerm ? searchTerm : categorySelect, region)
      .then((res) => {
        if (res.status === 200) return res.data;
        throw res.error?.message || "Get suggested videos error";
      })
      .then((resData) => dispatch(addSuddestedVido(resData)))
      .catch((e) => alert(e));
  }, [categorySelect, searchTerm]);

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
      </Box>
      <Box
        pt={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", textAlign: "center" }}
        >
          {categorySelect} <span className="ribbon__video-them">video</span>
        </Typography>
        <Video videos={suggestedVideos} />
      </Box>
    </Stack>
  );
}

export default Ribbon;
