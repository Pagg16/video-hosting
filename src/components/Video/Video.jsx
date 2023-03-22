import React from "react";
import { useSelector } from "react-redux";
import { Stack, Box } from "@mui/material";

import "./video.css";
import VideoItem from "../VideoItem/VideoItem";
import ChannelItem from "../ChannelItem/ChannelItem";

function Video({ direction, id }) {
  const suggestedVideos = useSelector(
    (state) => state.videos.suddestedVidos?.items
  );

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {(!!id
        ? suggestedVideos.filter((elem) => elem.id !== id)
        : suggestedVideos
      )?.map((elem, index) => (
        <Box key={index}>
          {elem.id.videoId && <VideoItem video={elem} />}
          {elem.id.channelId && <ChannelItem channel={elem} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Video;
