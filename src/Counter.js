import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    number: 0
  };

  // this 스코프 주의: 반드시 애로우 함수 사용
  handleInc = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDec = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>value: {this.state.number}</div>
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }
}
