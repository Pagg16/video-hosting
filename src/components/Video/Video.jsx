import React from "react";
import { useSelector } from "react-redux";
import { Stack, Box } from "@mui/material";

import "./video.css";
import VideoItem from "../VideoItem/VideoItem";
import ChannelItem from "../ChannelItem/ChannelItem";

function Video() {
  const suggestedVideos = useSelector((state) => state.videos.items);

  return (
    <Stack className="video">
      {suggestedVideos?.map((elem, index) => (
        <Box key={index}>
          {elem.id.videoId && <VideoItem video={elem} />}
          {elem.id.channelId && <ChannelItem channel={elem} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Video;
