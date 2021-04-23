import React from 'react';
import ReactDOM from 'react-dom';
import CopyRights from './CopyRights';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CopyRights />, div);
  ReactDOM.unmountComponentAtNode(div);
});