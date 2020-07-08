import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
