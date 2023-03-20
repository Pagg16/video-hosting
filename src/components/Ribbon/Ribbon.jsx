import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./ribbon.css";
import { useSelector, useDispatch } from "react-redux";
import SidePanel from "../SidePanel/SidePanel";
import Video from "../Video/Video";
import { getSuggestedVideos } from "../../api/videoApi";
import { addSuddestedVido } from "../../reduser/videosReduser";

function Ribbon() {
  const [categorySelect, setCategorySelect] = useState("New");

  const dispatch = useDispatch();

  useEffect(() => {
    getSuggestedVideos(categorySelect)
      .then((res) => res.data)
      .then((resData) => dispatch(addSuddestedVido(resData)))
      .catch((e) => alert(e));
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
