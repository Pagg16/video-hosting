import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Video from "../Video/Video";

import "./videoDetail.css";
import { getVideoDetails } from "../../api/videoApi";
import { useDispatch, useSelector } from "react-redux";
import { addDetailsVideo } from "../../reduser/videosReduser";

function VideoDetail() {
  const videoDetail = useSelector(
    (state) => state.videos.detailsVideo.items?.[0]
  );
  const suggestedVideos = useSelector(
    (state) => state.videos.suddestedVidos?.items
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoDetails(id)
      .then((res) => {
        if (res.status !== 200) {
          throw res.error?.message || "Get error";
        }
        return res.data;
      })
      .then((resData) => dispatch(addDetailsVideo(resData)))
      .catch((e) => alert(e));
  }, [id]);

  return (
    <Box className="videoDetail">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography
                  variantMapping={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail?.snippet?.thumbnails?.channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount || 0
                  ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.likeCount || 0
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Video videos={suggestedVideos} direction="column" id={id} />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
