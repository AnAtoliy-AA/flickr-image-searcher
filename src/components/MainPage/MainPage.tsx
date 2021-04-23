import React from 'react';
import ImagesContainer from '../ImagesContainer/ImagesContainer';
import Paginator from '../Paginator/Paginator';
import './MainPage.scss';

const MainPage: React.FC = () => (
  <div className="MainPage">
    MainPage Component
    <Paginator />
    <ImagesContainer />
  </div>
);

export default MainPage;
