import React, { Component } from 'react'

export default class Options extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        <select
          value={value}
          onChange={handleChange}
          name="options"
          id="options">
          <option value="option1">Option1</option>
          <option value="option2">Option2</option>
        </select>
      </label>
    )
  }
}
