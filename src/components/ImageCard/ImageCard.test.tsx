import React from "react";
import ReactDOM from "react-dom";
import ImageCard from "./ImageCard";
import { BrowserRouter as Router } from "react-router-dom";

describe("With router", () => {
  const mockProps = {
    imageSrcPath: "string",
    handleAddButtonClick: () => {},
    handleRemoveButtonClick: () => {},
    imageTitle: "",
  };

  it("ImageCard should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <ImageCard {...mockProps} />
      </Router>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
