import React, { Component } from 'react';
import Timer from '../Timer';
import './index.scss';

const IncDecButton = (clickFunc, dataAttr) => (
  <div className="incDec" onClick={clickFunc} data-counter={dataAttr}>
    {dataAttr}
  </div>
);

export default class CallPatient extends Component {
  state = {
    initialSeconds: 5,
    call: false,
    numberOfCalls: 0,
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
      numberOfCalls: 0,
      initialSeconds:
        counter === 'Up'
          ? initialSeconds + 1
          : initialSeconds > 0
          ? initialSeconds - 1
          : initialSeconds,
    });
  };

  handleChildUnmount = e => {
    const { currentTarget: { dataset: { cancel = {} } = {} } = {} } = e || {};
    this.setState({
      call: false,
      numberOfCalls: cancel === 'cancel' ? 0 : this.state.numberOfCalls + 1,
    });
  };

  render() {
    const { initialSeconds, call, numberOfCalls } = this.state;
    const { name } = this.props;
    console.log('numberOfCalls', numberOfCalls);
    const increaseButtons = ['Up', 'Down'];
    return (
      <div>
        <h1>{`Call Patient ${name}`}</h1>
        <div className="patientItem--outer">
          <div className="timerSetup">
            <h3>Define timer for call in seconds</h3>

            <div>
              <h2>{initialSeconds}</h2>
              <div className="incDecSetup--buttons">
                {increaseButtons.map(text =>
                  IncDecButton(this.increaseDecrese, text)
                )}
              </div>
            </div>
          </div>

          <div className="callPatient">
            <h2
              onClick={() =>
                this.setState({
                  call: true,
                })
              }
              style={{
                display: 'inline',
                color: `${call ? 'gray' : 'black'}`,
              }}
            >
              {numberOfCalls === 0
                ? `${call ? 'Calling in ...' : 'Call Patient '}`
                : `${call ? 'Calling in ...' : 'Recall '}`}
            </h2>
            {call && (
              <Timer
                unmountMe={this.handleChildUnmount}
                initialSeconds={initialSeconds}
              ></Timer>
            )}
          </div>
        </div>
      </div>
    );
  }
}
