import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./MainPage";
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

  it("MainPage should mount", () => {
    store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <MainPage />
        </Router>
      </Provider>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
