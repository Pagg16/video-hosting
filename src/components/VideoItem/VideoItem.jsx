import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl}>
        {/* <CardMedia
          className="videoItem__card"
          image={
            snippet?.thumbnails?.high?.url ||
            snippet?.thumbnails?.medium?.url ||
            snippet?.thumbnails?.standard?.url
          }
          alt={snippet?.title}
          component="img"
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        /> */}
        <div className="videoItem__card">
          <img
            className="videoItem__card-image"
            src={
              snippet?.thumbnails?.high?.url ||
              snippet?.thumbnails?.medium?.url ||
              snippet?.thumbnails?.standard?.url
            }
            alt={snippet?.title}
          />
        </div>
      </Link>
      <CardContent className="videoItem__card-content">
        <Link to={videoId ? `/channel/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={videoId ? `/channel/${snippet?.channelid}` : demoVideoUrl}>
          <Typography
            className="videoItem__card-typography"
            variant="subtitle2"
            color="gray"
          >
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              className="videoItem__card-checkCircle"
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoItem;
