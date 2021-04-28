import React from "react";
import { Link } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import "./SideBar.scss";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { ROUTE_NAMES_BOOKMARKS, ROUTE_NAMES_MAIN } from "../../shared/const";

const SideBar: React.FC = () => {
  const [value, setValue] = React.useState("main");

  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };
  return (
    <div className="SideBar">
      <BottomNavigation value={value} onChange={handleChange} className="Nav">
        <BottomNavigationAction
          component={Link}
          to={ROUTE_NAMES_MAIN}
          label="Main"
          value={ROUTE_NAMES_MAIN}
          className="NavLink"
          icon={<CloudIcon fontSize="large" />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTE_NAMES_BOOKMARKS}
          label="Bookmarks"
          value={ROUTE_NAMES_BOOKMARKS}
          className="NavLink"
          icon={<BookmarksIcon fontSize="large" />}
        />
      </BottomNavigation>
    </div>
  );
};

export default SideBar;
