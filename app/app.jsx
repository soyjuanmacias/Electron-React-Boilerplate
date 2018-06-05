import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home, PageTwo} from './src/pages';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/page2" component={PageTwo} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
