import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import ChannelItem from "../ChannelItem/ChannelItem";
import { useSelector } from "react-redux";

import "./channelDetail.css";
import VideoItem from "../VideoItem/VideoItem";

function ChannelDetail() {
  const channelDetail = useSelector((state) => state.channel.channelDetail);
  const channelVideos = useSelector((state) => state.channel.channelVideos);

  const { id } = useParams();

  useEffect(() => {
    //fetch channels/id
    //fetch video channel
  }, [id]);

  return (
    <Box className="channelDetail">
      <Box>
        <div className="channelDetail__gradient" />
        <ChannelItem channel={channelDetail} channelDetail={true} />
      </Box>
      <Box className="channelDetail__video-container">
        <Box sx={{ mr: { sm: "100px" } }} />
        <VideoItem video={channelVideos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
