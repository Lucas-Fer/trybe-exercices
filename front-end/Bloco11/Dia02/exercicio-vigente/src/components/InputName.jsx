import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class InputName extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <label htmlFor="name">
        Nome:
        <input
          value={value.toUpperCase()}
          onChange={handleInput}
          type="text"
          name="inputName"
          id="name"
          maxLength="40"
        />
      </label>
    );
  }
}

InputName.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}