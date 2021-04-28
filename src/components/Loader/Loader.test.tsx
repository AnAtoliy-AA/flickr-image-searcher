import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader />, div);
  ReactDOM.unmountComponentAtNode(div);
});