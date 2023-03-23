import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../Navbar/Navbar";
import Ribbon from "../Ribbon/Ribbon";
import ChannelDetail from "../ChannelDetail/ChannelDetail";
import SearchRibbon from "../SearchRibbon/SearchRibbon";
import VideoDetail from "../VideoDetail/VideoDetail";

import "./app.css";
import {
  channelIdPath,
  homePath,
  videoIdPath,
} from "../../utils/pathConstants";

function App() {
  return (
    <div className="app">
      <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path={homePath} exact element={<Ribbon />} />
          <Route path={videoIdPath} element={<VideoDetail />} />
          <Route path={channelIdPath} element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchRibbon />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
