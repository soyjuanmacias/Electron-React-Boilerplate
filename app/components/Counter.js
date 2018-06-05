// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            VOLVER
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          0
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} data-tclass="btn">
            +1
          </button>
          <button className={styles.btn} data-tclass="btn">
            -1
          </button>
          <button
            className={styles.btn}
            data-tclass="btn"
          >
            REST
          </button>
          <button
            className={styles.btn}
            data-tclass="btn"
          >
            async
          </button>
        </div>
      </div>
    );
  }
}
