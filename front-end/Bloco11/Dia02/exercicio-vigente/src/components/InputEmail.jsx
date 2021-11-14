import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class InputEmail extends Component {
  render() {
    const { handleInput, value } = this.props;
    
    return (
      <label htmlFor="inputEmail">
        Email:
        <input
          type="email"
          name="inputEmail" 
          id="inputEmail"
          value={value}
          onChange={handleInput}
          maxLength="50"
        />
      </label>
    )
  }
}

InputEmail.propTypes = {
  value: PropTypes.string.isRequired,
}