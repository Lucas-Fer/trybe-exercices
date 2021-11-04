import React, { Component } from 'react'

export default class InputText extends Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length > 27) error = 'Texto muito grande';
    if (value === '') error = 'Digite algo na caixa de texto'
    return (
      <label>
        <input
          value={value}
          onChange={handleChange}
          name="inputText"
          placeholder="input text"
          t1ype="text"
        />
        <span>{error? error : '' }</span>
      </label>
    )
  }
}
