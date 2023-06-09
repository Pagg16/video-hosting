import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constans";
import "./sidePanel.css";

function SidePanel({ setCategorySelect, categorySelect }) {
  return (
    <Stack
      className="sidePanel"
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((elem) => (
        <button
          key={elem.name}
          className={`sidePanel__category-btn ${
            categorySelect === elem.name && "sidePanel__category-btn_select"
          }`}
          onClick={() => setCategorySelect(elem.name)}
        >
          <span className="sidePanel__category-icon">{elem.icon}</span>
          <span className="sidePanel__category-name">{elem.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default SidePanel;
