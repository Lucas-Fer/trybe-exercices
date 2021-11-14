import React, { Component } from 'react';

export default class InputCpf extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <label htmlFor="inputCpf">
        CPF: 
        <input
          type="text"
          name="inputCpf"
          id="inputCpf"
          value={value}
          onChange={handleInput}
          maxLength="11"
        />
      </label>
    );
  }
}
