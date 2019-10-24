import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log('Number', this.state.number);
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.props.onExit}>Exit</button>
      </div>
    );
  }
}
