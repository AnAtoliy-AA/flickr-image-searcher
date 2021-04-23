import React from 'react';
import ReactDOM from 'react-dom';
import BookmarksPage from './BookmarksPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookmarksPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});