import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Ribbon from "./components/Ribbon/Ribbon";
import ChannelDetail from "./components/ChannelDetail/ChannelDetail";
import Video from "./components/Video/Video";
import SearchRibbon from "./components/SearchRibbon/SearchRibbon";

function App() {
  return (
    <div className="app">
      <Box sx={{ backgroundColor: "#000" }}>
        <Routes>
          <Navbar />
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
