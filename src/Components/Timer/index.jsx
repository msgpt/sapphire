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
      if (this.state.seconds === 1) {
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
      <div style={{ display: 'flex' }}>
        <h2 style={{ marginRight: '20px', minWidth: '40px' }}>{seconds}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid',
            borderRadius: '20px',
            width: '100px',
          }}
          onClick={e => this.props.unmountMe(e)}
          data-cancel="cancel"
        >
          <span
            style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
          >
            <i className="icon-remove "></i> Cancel
          </span>
        </div>
        {/* <button  onClick={e => this.props.unmountMe(e)}>Cancel</button> */}
      </div>
    );
  }
}

Timer.propTypes = {
  initialSeconds: PropTypes.number,
};
