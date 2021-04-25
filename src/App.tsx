import React, { useState } from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import { useIdleTimer } from 'react-idle-timer'
import SearchForm from "./components/SearchForm/SearchForm";
import MainPage from "./components/MainPage/MainPage";
import BookmarksPage from "./components/BookmarksPage/BookmarksPage";
import SideBar from "./components/SideBar/SideBar";
import { DEFAULT_VALUES } from "./shared/const";
import IdleMask from "./components/IdleMask/IdleMask";

function App() {
  const [isIdle, setIsIdle] = useState(DEFAULT_VALUES.FALSE);
  
  const handleOnIdle = () => {
    //TODO Last user usage
    // console.log('last active', getLastActiveTime())
    setIsIdle(DEFAULT_VALUES.TRUE);
  }

  const handleOnActive = () => {
    setIsIdle(DEFAULT_VALUES.FALSE);
  }

  useIdleTimer({
    timeout: DEFAULT_VALUES.IDLE_DELAY_TIME,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: DEFAULT_VALUES.IDLE_DEBOUNCE,
  })

  return (
    <div className="App">
      {isIdle && <IdleMask />}
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
