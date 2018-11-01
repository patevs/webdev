// global react and react-dom import
import React from 'react';
import ReactDOM from 'react-dom';

// import jumbotron component
import Jumbo from './Jumbo/Jumbo';
// import loading component
import Loading from './Loading/Loading';
// import loginForm component
import LoginForm from './LoginForm/LoginForm';
// import footer component
import Footer from './Footer/Footer';
// import MessageList component
import MessageList from './MessageList/MessageList';

// import main style sheet
import './index.css';

// import service worker
import * as serviceWorker from './serviceWorker';

// render react components; Jumbo, Loading, Footer
ReactDOM.render(<Jumbo />, document.getElementById('jumbo'));
ReactDOM.render(<Loading />, document.getElementById('loading'));
ReactDOM.render(<LoginForm />, document.getElementById('login-form'));
ReactDOM.render(<MessageList />, document.getElementById('message-list'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
