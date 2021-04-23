import React from 'react';
import ReactDOM from 'react-dom';
import ImagesContainer from './ImagesContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImagesContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});