import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY } from "../../api-keys/api-keys";
import { logout } from "../../redux/auth-reducer";

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(logout());
  };

  return (
    <GoogleLogout
      clientId={GOOGLE_API_KEY}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
};

export default Logout;
