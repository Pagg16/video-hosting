import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./channelItem.css";
import { demoProfilePicture } from "../../utils/constans";

function ChannelItem({ channel }) {
  return (
    <Box className="channelItem" sx={{ width: { xs: "356px", md: "320px" } }}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent className="channelItem__cardContent">
          <CardMedia
            className="channelItem__cardMedia"
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
          />

          <Typography variant="h5">
            {channel?.snippet?.title}
            <CheckCircle className="channelItem__checkCircle" />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelItem;
