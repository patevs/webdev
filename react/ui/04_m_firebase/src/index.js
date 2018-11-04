
/*
  src/index.js
  application entry point
*/

// global react and react-dom import
import React from 'react';
import ReactDOM from 'react-dom';

// import main style sheet
import './index.css';

// import jumbo component
import Jumbo from './app/components/Jumbo/Jumbo';
// import app component
import App from './app/App/App';
// import signin components
import Signin from './app/components/Signin/Signin';
// import UI components
import UI from './app/components/UI/UI';
/*
import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAugwPibx0ejOSuflyyzeEujihiFzl_5No",
  authDomain: "vicservices-196909.firebaseapp.com",
  databaseURL: "https://vicservices-196909.firebaseio.com",
  projectId: "vicservices-196909",
  storageBucket: "vicservices-196909.appspot.com",
  messagingSenderId: "459558750620"
};
firebase.initializeApp(config);
*/
// import service worker
import * as serviceWorker from './serviceWorker';


// render jumbo component
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));
// render app component
ReactDOM.render(<App />, document.getElementById('app-root'));
// render signin component
ReactDOM.render(<Signin />, document.getElementById('signin'));
// render UI component
ReactDOM.render(<UI />, document.getElementById('ui'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
