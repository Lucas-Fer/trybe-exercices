import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>
        <textarea
          placeholder="textarea"
          value={value}
          onChange={handleChange}
          name="textArea"
          cols="30"
          rows="10" />
      </label>
    )
  }
}
