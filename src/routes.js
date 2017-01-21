// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

console.log('hi from src/routes.js')
const Routes = (props) => (
  <Router {...props}>
    <Route path="/sentieoapp1" component={App} />
    <Route path="/sentieoapp1/about" component={About} />
    <Route path="/sentieoapp1/*" component={NotFound} />
  </Router>
);

export default Routes;