import React from "react";
import { NavLink } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

const SideBar: React.FC = () => (
  <div>
    SideBar Component
    <NavLink to="/" style={{ textDecoration: "none" }}>
      {<CloudIcon />}
    </NavLink>
    <NavLink to="/bookmarks" style={{ textDecoration: "none" }}>
      {<BookmarksIcon />}
    </NavLink>
  </div>
);

export default SideBar;
