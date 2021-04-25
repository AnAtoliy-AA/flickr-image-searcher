import React from 'react';
import ImagesContainer from '../ImagesContainer/ImagesContainer';
import Paginator from '../Paginator/Paginator';
import SearchForm from '../SearchForm/SearchForm';
import './MainPage.scss';

const MainPage: React.FC = () => (
  <div className="MainPage">
    <SearchForm />
    <Paginator />
    <ImagesContainer />
  </div>
);

export default MainPage;
