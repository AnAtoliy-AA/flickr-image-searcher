import React from "react";
import ReactDOM from "react-dom";
import BookmarksPage from "./BookmarksPage";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

describe("With react-redux Provider", () => {
  const initialState = {
    searchForm: { searchTerm: "" },
    imagesList: { imagesInfoList: {}, isLoading: false },
    bookmarks: { bookmarksList: [] },
  };

  const mockStore = configureStore();
  let store;

  it("BookmarksPage should mount", () => {
    store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <BookmarksPage />
        </Router>
      </Provider>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
