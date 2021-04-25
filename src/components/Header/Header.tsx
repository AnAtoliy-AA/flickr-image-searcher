import React from 'react';
import { ELEMENT_TEXT } from '../../shared/const';
import './Header.scss';

const Header: React.FC = () => (
  <div className="Header">
    {ELEMENT_TEXT.APP_NAME}
  </div>
);

export default Header;
