import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './ImageContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});