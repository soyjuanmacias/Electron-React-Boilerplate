// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home__container" data-tid="container">
          <h2>Home</h2>
          <Link to="/page2">Go to page 2</Link>
        </div>
      </div>
    );
  }
}
