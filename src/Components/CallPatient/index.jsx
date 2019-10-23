import React, { Component } from 'react';
import Timer from '../Timer';

export default class CallPatient extends Component {
  state = {
    seconds: 10,
  };

  increaseDecrese = ({
    target: {
      dataset: { counter },
    },
  }) => {
    console.log(counter);
    const { seconds } = this.state;
    this.setState({
      seconds:
        counter === 'Up' ? seconds + 1 : seconds > 0 ? seconds - 1 : seconds,
    });
  };

  defineSeconds = () => {
    const myInterval = setInterval(() => {
      if (this.state.seconds <= 0) {
        clearInterval(myInterval);
      } else {
        this.setState({ seconds: this.state.seconds - 1 });
      }
    }, 1000);
  };

  //   updateTimer = ({ seconds }) => {
  //     this.setState({ seconds }, this.defineSeconds);
  //   };

  //   defineSeconds = () => {
  //     setInterval(() => {
  //       this.setState(({ seconds }) => {
  //         if (seconds !== 0) {
  //           return {
  //             seconds: seconds - 1,
  //           };
  //         }
  //         clearInterval(this.updateTimer);
  //       });
  //     }, 1000);
  //   };

  render() {
    const { seconds } = this.state;
    console.log('TIMER', seconds);

    return (
      <div>
        <h1>Call Patient</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                widht: '100px',
                height: '100px',
                backgroundColor: 'red',
              }}
            >
              {seconds}
            </div>
            {/* <Timer initialSeconds={seconds}></Timer> */}
          </div>
          <div style={{ flex: 1 }}>
            <div onClick={this.increaseDecrese} data-counter="Up">
              Up
            </div>
            <div onClick={this.increaseDecrese} data-counter="Down">
              Down
            </div>
            <button onClick={() => this.defineSeconds(this.state)}>
              Call Doente
            </button>
          </div>
        </div>
      </div>
    );
  }
}
