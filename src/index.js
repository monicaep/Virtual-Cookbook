import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDF2O7zX11apfiaxDDLnQd7SgIoS1BPgIE",
  authDomain: "virtual-cookbook.firebaseapp.com",
  databaseURL: "https://virtual-cookbook.firebaseio.com",
  projectId: "virtual-cookbook",
  storageBucket: "virtual-cookbook.appspot.com",
  messagingSenderId: "1093060911114",
  appId: "1:1093060911114:web:a744e1a03c32aed8947ff3",
  measurementId: "G-XJ0ZPDG7E8"
};

firebase.initiatlizeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
