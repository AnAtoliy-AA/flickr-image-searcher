import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import MainPage from "./components/MainPage/MainPage";
import BookmarksPage from "./components/BookmarksPage/BookmarksPage";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <SearchForm />
        <SideBar />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/bookmarks">
          <BookmarksPage />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
