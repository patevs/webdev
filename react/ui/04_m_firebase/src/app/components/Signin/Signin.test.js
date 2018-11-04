
/*
  src/app/components/Signin/Signin.test.js
  Signin component tests
*/

// react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Signin component
import Signin from './Signin';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
