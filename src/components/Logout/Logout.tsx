import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY } from "../../api-keys/api-keys";
import { logout } from "../../redux/auth-reducer";
import "./Logout.scss";

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(logout());
  };

  return (
    <div className="Logout">
      <GoogleLogout
        clientId={GOOGLE_API_KEY}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
