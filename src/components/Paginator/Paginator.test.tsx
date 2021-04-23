import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from './Paginator';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paginator />, div);
  ReactDOM.unmountComponentAtNode(div);
});