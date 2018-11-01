
/*
  src/App.test.js
*/

// import react and react-dom libs
import React from 'react';
import ReactDOM from 'react-dom';
// import app component
import App from './App';

// test methods
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
