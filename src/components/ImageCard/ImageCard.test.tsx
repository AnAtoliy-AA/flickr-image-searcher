import React from 'react';
import ReactDOM from 'react-dom';
import ImageCard from './ImageCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});