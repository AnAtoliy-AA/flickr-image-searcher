import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";
import { BrowserRouter as Router } from "react-router-dom";

it("SideBar should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SideBar />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
