import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import "./videoItem.css";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../../utils/constans";

function VideoItem({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      className="videoItem"
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          className="videoItem__card"
          image={snippet?.thumbanils?.high?.url}
          alt={snippet?.title}
        />
      </Link>
      <CardContent className="videoItem__card-content">
        <Link to={videoId ? `/channel/${videoId}` : demoVideoUrl}>
          <Typography
            className="videoItem__card-typography"
            variant="subtitle1"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={videoId ? `/channel/${snippet?.channelid}` : demoVideoUrl}>
          <Typography
            className="videoItem__card-typography"
            variant="subtitle2"
          >
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle className="videoItem__card-checkCircle" />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoItem;
