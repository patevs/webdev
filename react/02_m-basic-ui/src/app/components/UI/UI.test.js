
/*
  src/app/components/UI/UI.test.js
  UI component tests
*/

// react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// UI component
import UI from './UI';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UI />, div);
  ReactDOM.unmountComponentAtNode(div);
});
