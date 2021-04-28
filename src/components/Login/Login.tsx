import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { setAuthFailure, setUserData } from "../../redux/auth-reducer";
import { GOOGLE_API_KEY } from "../../api-keys/api-keys";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const successGoogle = (response: any) => {
    dispatch(setUserData(response));
  };

  const failureGoogle = (authFailureMessage: any) => {
    dispatch(setAuthFailure(authFailureMessage));
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_API_KEY}
      buttonText="Login"
      onSuccess={successGoogle}
      onFailure={failureGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Login;
