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
      sx={{ width: { xs: "356px", md: "320px" }, borderRadius: "10px" }}
    >
      <Link
        onClick={(e) => {
          if (!!channelDetail) {
            e.preventDefault();
          }
        }}
        to={`/channel/${channel?.id?.channelId}`}
      >
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
                channel?.snippet?.thumbnails?.high?.url ||
                channel?.snippet?.thumbnails?.medium?.url ||
                channel?.snippet?.thumbnails?.standard?.url ||
                demoProfilePicture
              }
              alt={channel?.snippet?.title}
              ref={(e) => {
                if (!!e) {
                  e.onerror = () => {
                    e.src = demoProfilePicture;
                  };
                }
              }}
            />
          </div>
          <Typography variant="h5">
            {channel?.snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              className="channelItem__checkCircle"
            />
          </Typography>
          {channel?.statistics && (
            <>
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                {channel?.snippet?.description.slice(0, 60)}...
              </Typography>
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                Subscribers{" "}
                {parseInt(channel?.statistics?.subscriberCount).toLocaleString(
                  "en-US"
                )}
              </Typography>
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                Views{" "}
                {parseInt(channel?.statistics?.viewCount).toLocaleString(
                  "en-US"
                )}
              </Typography>
            </>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelItem;
