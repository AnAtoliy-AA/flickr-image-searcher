import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";
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

  it("SearchForm should mount", () => {
    store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <SearchForm />
      </Provider>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
