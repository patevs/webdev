
/*
  src/index.js
*/

// global react and react-dom import
import React from 'react';
import ReactDOM from 'react-dom';

// import main style sheet
import './index.css';

// import jumbo component
import Jumbo from './components/Jumbo/Jumbo';
// import app component
import App from './App';

// import service worker
import * as serviceWorker from './serviceWorker';

// render jumbo component
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));
// render app component
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
