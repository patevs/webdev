import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import common components
import Jumbo from './components/common/Jumbo/Jumbo';
import App from './App';
import * as serviceWorker from './serviceWorker';

// render components
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
