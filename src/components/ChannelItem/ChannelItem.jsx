import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import "./channelItem.css";
import { demoProfilePicture } from "../../utils/constans";

function ChannelItem({ channel, channelDetail }) {
  return (
    <Box
      className={`channelItem ${
        !!channelDetail ? "channelItem-channelDetail" : ""
      }`}
      sx={{ width: { xs: "356px", md: "320px" } }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent className="channelItem__cardContent">
          {/* <CardMedia
            className="channelItem__cardMedia"
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
            component="img"
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          /> */}

          <div className="channelItem__card">
            <img
              className="channelItem__card-image"
              src={
                channel?.thumbnails?.high?.url ||
                channel?.thumbnails?.medium?.url ||
                channel?.thumbnails?.standard?.url ||
                demoProfilePicture
              }
              alt={channel?.snippet?.title}
            />
          </div>
          <Typography variant="h5">
            {channel?.snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              className="channelItem__checkCircle"
            />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {channel?.snippet?.description.slice(0, 60)}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelItem;
