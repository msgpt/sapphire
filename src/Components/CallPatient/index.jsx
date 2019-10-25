import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timer from '../Timer';
import './index.scss';

const IncDecButton = (clickFunc, dataAttr, index) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    key={index}
    role="button"
    tabIndex={index}
    className="incDec"
    onClick={clickFunc}
    data-counter={dataAttr}
  >
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
        // eslint-disable-next-line no-nested-ternary
        counter === 'Up'
          ? initialSeconds + 1
          : initialSeconds > 0
          ? initialSeconds - 1
          : initialSeconds,
    });
  };

  handleChildUnmount = e => {
    const { numberOfCalls } = this.state;
    const { currentTarget: { dataset: { cancel = {} } = {} } = {} } = e || {};
    this.setState({
      call: false,
      numberOfCalls: cancel === 'cancel' ? 0 : numberOfCalls + 1,
    });
  };

  render() {
    const { initialSeconds, call, numberOfCalls } = this.state;
    const { name } = this.props;
    console.log('numberOfCalls', numberOfCalls);
    const increaseButtons = ['Up', 'Down'];
    return (
      <div className="patientList">
        <h1>{`Call Patient ${name}`}</h1>
        <div className="patientItem--outer">
          <div className="timerSetup">
            <h3>Define timer for call in seconds</h3>

            <div>
              <h2>{initialSeconds}</h2>
              <div className="incDecSetup--buttons">
                {increaseButtons.map((text, index) =>
                  IncDecButton(this.increaseDecrese, text, index)
                )}
              </div>
            </div>
          </div>

          <div className="callPatient">
            <h2
              className={`${call ? 'h2gray' : 'h2black'}`}
              onClick={() =>
                this.setState({
                  call: true,
                })
              }
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

CallPatient.propTypes = {
  name: PropTypes.string,
};
