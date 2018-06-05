/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './app';
import HomePage from './containers/HomePage';
import Counter from './components/Counter';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
