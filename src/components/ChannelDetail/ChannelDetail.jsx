import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import ChannelItem from "../ChannelItem/ChannelItem";
import { useDispatch, useSelector } from "react-redux";

import "./channelDetail.css";
import { getChannelDetails, getChannelVideos } from "../../api/videoApi";
import {
  addDetailChannel,
  addVideosChannel,
} from "../../reduser/channelReduser";
import Video from "../Video/Video";
import { addSuddestedVido } from "../../reduser/videosReduser";

function ChannelDetail() {
  const channelDetail = useSelector(
    (state) => state.channel.channelDetail.items?.[0]
  );

  const suggestedVideos = useSelector(
    (state) => state.videos.suddestedVidos?.items
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getChannelDetails(id), getChannelVideos(id)])
      .then((resArr) => {
        if (resArr[0].status === 200 && resArr[1].status === 200) {
          return {
            channelDetails: resArr[0].data,
            channelVideos: resArr[1].data,
          };
        }
        throw (
          resArr[0].error?.message ||
          resArr[1].error?.message ||
          "Get channel and videos error"
        );
      })
      .then((resObj) => {
        dispatch(addDetailChannel(resObj.channelDetails));
        dispatch(addSuddestedVido(resObj.channelVideos));
      })
      .catch((e) => alert(e))
      .finally(() => {});
  }, [id]);

  return (
    <Box className="channelDetail">
      <Box>
        <div className="channelDetail__gradient" />
        <ChannelItem channel={channelDetail} channelDetail={true} />
      </Box>
      <Box className="channelDetail__video-container">
        <Video videos={suggestedVideos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
