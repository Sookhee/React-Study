import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Greeting from './Chapter07/Greeting';
import LoginControl from './Chapter07/LoginControl';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById('root'));
ReactDOM.render(<LoginControl />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
