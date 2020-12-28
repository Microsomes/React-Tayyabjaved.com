import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import reportWebVitals from './reportWebVitals';

import Home from './views/home/homeHook'


import HomeTooMany from './views/apps/TooMany/src/views/home/HomeTooMany'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/toomanyfacts">
          <HomeTooMany></HomeTooMany>
        </Route>

      </Switch>


    </Router>
  
  
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
