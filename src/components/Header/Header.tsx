import React from "react";
import { ELEMENT_TEXT } from "../../shared/const";
import "./Header.scss";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

const Header: React.FC = () => {
  const userName = useSelector(
    (store: any) => store.auth.userData.profileObj.name
  );
  const isAuthorized = useSelector((store: any) => store.auth.isAuthorized);

  return (
    <div className="Header">
      <h1>{ELEMENT_TEXT.APP_NAME}</h1>
      <>
        {isAuthorized
          ? `${ELEMENT_TEXT.AUTHORIZED} ${userName}`
          : ELEMENT_TEXT.NOT_AUTHORIZED}
      </>
      {!isAuthorized ? <Login /> : <Logout />}
    </div>
  );
};

export default Header;
