import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";
import SearchBar from "../SearchBar/SearchBar";

import "./navbar.css";
import { useDispatch } from "react-redux";
import { setRegionCodeReduser } from "../../reduser/videosReduser";
import { homePath } from "../../utils/pathConstants";

function Navbar() {
  const [regionCode, setRegionCode] = useState("US");

  const dispatch = useDispatch();

  const { path } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setRegionCodeReduser(regionCode));
  }, [regionCode]);

  function inputPrevention() {
    if (path !== homePath) {
      navigate(homePath);
    }
  }

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
      <Link to={homePath} className="navbar__link">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar inputPrevention={inputPrevention} />

      <Select
        sx={{
          color: "darck",
          backgroundColor: "#84dcff",
          borderRadius: "25px",
          ".MuiSelect-select": { padding: "10px" },
        }}
        labelId="region-code-label"
        id="region-code-label"
        value={regionCode}
        label="Region"
        onChange={(e) => {
          setRegionCode(e.target.value);
        }}
        onClick={inputPrevention}
      >
        <MenuItem defaultChecked name="United States" value="US">
          United States
        </MenuItem>
        <MenuItem name="Russia" value="RU">
          Russia
        </MenuItem>
        <MenuItem name="Uzbekistan" value="UZ">
          Uzbekistan
        </MenuItem>
        <MenuItem name="Antarctica" value="AQ">
          Antarctica
        </MenuItem>
      </Select>
    </Stack>
  );
}

export default Navbar;
