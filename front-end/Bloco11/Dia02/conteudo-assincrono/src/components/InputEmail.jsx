import React, { Component } from 'react'

export default class InputEmail extends Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined
    if (value.length > 20) error = 'Email muito grande'
    return (
      <label>
        <input
          value={value}
          onChange={handleChange}
          name="inputEmail"
          placeholder="input email"
          type="email" />
        <span>{ error ? error : ''}</span>
      </label>
    )
  }
}
