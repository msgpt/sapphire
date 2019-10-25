import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Timer extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    const { initialSeconds } = this.props;
    this.setState({
      seconds: initialSeconds,
    });

    this.defineSeconds();
  }

  componentDidUpdate(prevProps) {
    const { initialSeconds } = this.props;
    if (prevProps !== this.props) {
      this.setState({
        seconds: initialSeconds,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.defineSeconds);
  }

  defineSeconds = () => {
    const { unmountMe } = this.props;
    this.myInterval = setInterval(() => {
      if (this.state.seconds === 1) {
        clearInterval(this.myInterval);
        unmountMe();
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
      <div className="timer--outer">
        <h2>{seconds}</h2>
        <div
          className="timer--inner"
          onClick={e => this.props.unmountMe(e)}
          data-cancel="cancel"
        >
          <span>
            <i className="icon-remove "></i> Cancel
          </span>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  initialSeconds: PropTypes.number,
  unmountMe: PropTypes.func,
};
