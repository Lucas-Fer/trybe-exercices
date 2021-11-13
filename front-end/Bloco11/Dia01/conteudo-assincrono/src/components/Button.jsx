import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.functionLog = this.functionLog.bind(this);
    this.functionLog2 = this.functionLog2.bind(this);
    this.functionLog3 = this.functionLog3.bind(this);

    this.state = {
      clickButton1: 1,
      clickButton2: 1,
      clickButton3: 1,
    };
  }

  functionLog() {
    this.setState((previous, _props) => ({
      clickButton1: previous.clickButton1 + 1,
    }));
  }

  functionLog2() {
    this.setState((previous, _props) => ({
      clickButton2: previous.clickButton2 + 1,
    }));
  }

  functionLog3() {
    this.setState((previous, _props) => ({
      clickButton3: previous.clickButton3 + 1,
    }));
  }

  btnColor(stateNumber) {
    return stateNumber % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickButton1, clickButton2, clickButton3 } = this.state;
    const { functionLog, functionLog2, functionLog3, btnColor } = this;
    return (
      <div>
        <button style={{ backgroundColor: btnColor(clickButton1) }} onClick={functionLog}>Número de clicks: {clickButton1}</button>
        <button style={{ backgroundColor: btnColor(clickButton2) }} onClick={functionLog2}>Número de clicks: {clickButton2}</button>
        <button style={{ backgroundColor: btnColor(clickButton3) }} onClick={functionLog3}>Número de clicks: {clickButton3}</button>
      </div>
    );
  }
}
