import React from "react";
import { useSelector } from "react-redux";
import { Stack, Box } from "@mui/material";

import "./video.css";
import VideoItem from "../VideoItem/VideoItem";
import ChannelItem from "../ChannelItem/ChannelItem";

function Video({ videos, direction, id }) {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      width="auto"
      gap={2}
    >
      {(!!id
        ? videos?.filter((elem) => {
            return elem.id.videoId !== id;
          })
        : videos
      )?.map((elem, index) => (
        <div key={index}>
          {!!!elem.id.playlistId && (
            <Box>
              {elem.id.videoId && <VideoItem video={elem} />}
              {elem.id.channelId && <ChannelItem channel={elem} />}
            </Box>
          )}
        </div>
      ))}
    </Stack>
  );
}

export default Video;
