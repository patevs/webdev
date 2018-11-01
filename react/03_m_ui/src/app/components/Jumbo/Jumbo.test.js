
/*
  src/app/components/Jumbo/Jumbo.test.js
  jumbotron component tests
*/

// react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// jumbotron component
import Jumbo from './Jumbo';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jumbo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
