import React from "react";
import ReactDOM from "react-dom";
import Paginator from "./Paginator";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("With react-redux Provider", () => {
  const initialState = {
    searchForm: { searchTerm: "" },
    imagesList: { imagesInfoList: {}, isLoading: false },
    bookmarks: { bookmarksList: [] },
  };

  const mockStore = configureStore();
  let store;

  it("Paginator should mount", () => {
    store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Paginator />
      </Provider>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
