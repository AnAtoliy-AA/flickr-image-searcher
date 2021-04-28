import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './Logout';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

describe("With react-redux Provider", () => {
  const initialState = {
    searchForm: { searchTerm: "" },
    imagesList: { imagesInfoList: {}, isLoading: false },
    bookmarks: { bookmarksList: [] },
    auth: { userData: {profileObj: {name: ''}}},
  };

  const mockStore = configureStore();
  let store;

  it("Login should mount", () => {
    store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Logout />
        </Router>
      </Provider>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});