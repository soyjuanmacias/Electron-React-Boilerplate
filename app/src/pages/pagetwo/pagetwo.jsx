// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pagetwo.scss';

export class PageTwo extends Component {
  render() {
    return (
      <div className="home__container" data-tid="container">
        <h2>Page Two</h2>
        <Link to="/">Go to home</Link>
      </div>
    );
  }
}
