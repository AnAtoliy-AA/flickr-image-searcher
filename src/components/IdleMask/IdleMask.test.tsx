import React from 'react';
import ReactDOM from 'react-dom';
import IdleMask from './IdleMask';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdleMask />, div);
  ReactDOM.unmountComponentAtNode(div);
});
