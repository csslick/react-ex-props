import React, { Component } from 'react';

export default class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  };
  render() {
    return (
      <div>
        hello My name is <b>{this.props.name}</b>
      </div>
    );
  }
}
