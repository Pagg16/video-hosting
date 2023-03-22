import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
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
        zIndex: 2,
      }}
    >
      <Link to="/" className="navbar__link">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default navbar;
