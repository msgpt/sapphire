import React, { Component } from 'react';
import Counter from '../Counter';

export default class NewCallPatient extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: null };
  }

  render() {
    if (this.state.counter) {
      return (
        <Counter
          counter={this.state.counter}
          onExit={() => this.setState({ counter: null })}
        />
      );
    }
    return (
      <div>
        <h2>Pick a Counter</h2>
        <button onClick={() => this.setState({ counter: 'simplest' })}>
          Simplest
        </button>
        <br />
        <br />
      </div>
    );
  }
}
