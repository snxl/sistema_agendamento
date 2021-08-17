import React from 'react';
import ReactDOM from 'react-dom';

import Router from "./router/router"

import "./styles/index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.querySelector('[data-root]')
);

