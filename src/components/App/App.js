import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../Navbar/Navbar";
import Ribbon from "../Ribbon/Ribbon";
import ChannelDetail from "../ChannelDetail/ChannelDetail";
import Video from "../Video/Video";
import SearchRibbon from "../SearchRibbon/SearchRibbon";

function App() {
  return (
    <div className="app">
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Ribbon />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchRibbon />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
