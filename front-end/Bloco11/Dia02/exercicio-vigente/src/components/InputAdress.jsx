import React, { Component } from 'react'

export default class InputAdress extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <label htmlFor="inputAdress">
        <textarea
          placeholder="Endereço:"
          name="inputAdress"
          id="inputAdress"
          cols="30"
          rows="5"
          value={value.replace(/[^\w\s]/gi, '')}
          onChange={handleInput}
          maxLength="200"
        />
      </label>
    )
  }
}
