import React, { useState } from "react";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import { useIdleTimer } from 'react-idle-timer'
import MainPage from "./components/MainPage/MainPage";
import BookmarksPage from "./components/BookmarksPage/BookmarksPage";
import SideBar from "./components/SideBar/SideBar";
import { DEFAULT_VALUES, ROUTE_NAMES_BOOKMARKS, ROUTE_NAMES_MAIN } from "./shared/const";
import IdleMask from "./components/IdleMask/IdleMask";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { logout } from "./redux/auth-reducer";

function App() {
  const dispatch = useDispatch();
  const [isIdle, setIsIdle] = useState(DEFAULT_VALUES.FALSE);
  
  const handleOnIdle = () => {
    //TODO Last user usage
    // console.log('last active', getLastActiveTime())
    setIsIdle(DEFAULT_VALUES.TRUE);
    dispatch(logout());
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
        <Header />
        <SideBar />
        <Route exact path={`/${ROUTE_NAMES_MAIN}`}>
          <MainPage />
        </Route>
        <Route exact path={`/${ROUTE_NAMES_BOOKMARKS}`}>
          <BookmarksPage />
        </Route>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
