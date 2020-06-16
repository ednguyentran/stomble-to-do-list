import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "#1D315B" }}>
        <CalendarTodayIcon />
        <Typography>&nbsp;&nbsp;Your Planner</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
