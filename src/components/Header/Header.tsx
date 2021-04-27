import React from 'react';
import { ELEMENT_TEXT } from '../../shared/const';
import './Header.scss';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthFailure, setUserData } from '../../redux/auth-reducer';
import { GOOGLE_API_KEY } from '../../api-keys/api-keys';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store: any) => store.auth.userData.profileObj.name)

  const successGoogle = (response: any) => {
    dispatch(setUserData(response));
    console.log(response);
  }

  const failureGoogle = (authFailureMessage: any) => {
    dispatch(setAuthFailure(authFailureMessage));
  }

  return (
  <div className="Header">
    {ELEMENT_TEXT.APP_NAME}
    {userName}
    <GoogleLogin
    clientId={GOOGLE_API_KEY}
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google auth</button>
    )}
    buttonText="Login"
    onSuccess={successGoogle}
    onFailure={failureGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  </div>
)
    };

export default Header;
