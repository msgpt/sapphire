import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.setState({
      seconds: this.props.initialSeconds,
    });
    this.defineSeconds();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        seconds: this.props.initialSeconds,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.defineSeconds);
  }

  defineSeconds = () => {
    this.myInterval = setInterval(() => {
      if (this.state.seconds === 0) {
        this.props.unmountMe();
        clearInterval(this.myInterval);
      } else {
        this.setState(state => ({
          seconds: state.seconds - 1,
        }));
      }
    }, 1000);
  };

  render() {
    const { seconds } = this.state;
    console.log('seconds', seconds);
    return (
      <div>
        <h1 style={{ display: 'inline' }}>{seconds}</h1>
        <button onClick={() => this.props.unmountMe()}>Cancel</button>
      </div>
    );
  }
}

Timer.propTypes = {
  initialSeconds: PropTypes.number,
};
