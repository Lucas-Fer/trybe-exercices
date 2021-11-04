import React, { Component } from 'react'

export default class Checkbox extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          name="verification"
          value={value}
          onChange={handleChange} />
      </label>
    )
  }
}
