import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  render() {
    const { initialSeconds } = this.props;
    return (
      <div>
        <h1>{`Call Patient ?${initialSeconds} seconds`}</h1>
        <button onClick={() => alert('olá')}>Call Doente</button>
      </div>
    );
  }
}

Timer.propTypes = {
  initialSeconds: PropTypes.number,
};
