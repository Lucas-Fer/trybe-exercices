import React, { Component } from 'react'

export default class InputCheckbox extends Component {
  render() {
    const { value, getInput } = this.props;
    return (
      
        <input
          type="checkbox"
          name="inputCheckbox"
          checked={value}
          onChange={getInput}
        />
      
    )
  }
}
