import React, { useEffect, useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTermReduser } from "../../reduser/videosReduser";
import "./searchBar.css";

function SearchBar({ inputPrevention }) {
  const searchTerm = useSelector((state) => state.videos.searchTerm);

  const [searchTermInput, setSearchTermInput] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTermInput) {
      dispatch(setSearchTermReduser(searchTermInput));
    }
  }

  useEffect(() => {
    if (searchTermInput !== searchTerm) setSearchTermInput(searchTerm);
  }, [searchTerm]);

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        zIndex: 2,
        backgroundColor: "#efefef",
      }}
      onClick={inputPrevention}
    >
      <input
        className="search-bar__input"
        placeholder="Search"
        value={searchTermInput}
        onChange={(e) => {
          setSearchTermInput(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#84dcff" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
