import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSearchTermReduser } from "../../reduser/videosReduser";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (searchTerm) {
      dispatch(setSearchTermReduser(searchTerm));
      setSearchTerm("");
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        zIndex: 2,
        backgroundColor: "#efefef",
      }}
    >
      <input
        className="search-bar__input"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#84dcff" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
