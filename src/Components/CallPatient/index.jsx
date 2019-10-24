import React, { Component } from 'react';
import Timer from '../Timer';

export default class CallPatient extends Component {
  state = {
    initialSeconds: 5,
    call: false,
  };

  increaseDecrese = ({
    target: {
      dataset: { counter },
    },
  }) => {
    console.log(counter);
    const { initialSeconds } = this.state;
    this.setState({
      call: false,
      initialSeconds:
        counter === 'Up'
          ? initialSeconds + 1
          : initialSeconds > 0
          ? initialSeconds - 1
          : initialSeconds,
    });
  };

  handleChildUnmount = () => {
    this.setState({ call: false });
  };

  render() {
    const { initialSeconds, call } = this.state;
    console.log('TIMER', initialSeconds);

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
              {initialSeconds}
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
            <div>
              <h1
                onClick={() => this.setState({ call: true })}
                style={{ display: 'inline' }}
              >
                Call Patient ?
              </h1>
              {call && (
                <Timer
                  unmountMe={this.handleChildUnmount}
                  initialSeconds={initialSeconds}
                ></Timer>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
