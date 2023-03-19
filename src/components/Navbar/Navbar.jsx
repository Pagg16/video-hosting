import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../../utils/constans";
import SearchBar from "../SearchBar/SearchBar";

import "./navbar.css";

function navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" className="navbar__link">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default navbar;
