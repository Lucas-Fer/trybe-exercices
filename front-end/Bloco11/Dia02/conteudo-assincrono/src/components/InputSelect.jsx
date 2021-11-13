import React, { Component } from 'react';

export default class InputSelect extends Component {
  render() {
    const { value, getInput } = this.props;
    return (
      <select
        name="inputSelect"
        value={value}
        onChange={getInput}
      >
        <option disable selected >Selecione</option>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
      </select>
    );
  }
}
