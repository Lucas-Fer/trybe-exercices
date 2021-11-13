import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component {
  render() {
    const { value, getInput } = this.props;

    let error = undefined;
    if (value.length > 30) error = 'Texto grande';
    return (
      <>
        <input
          type="text"
          value={value}
          onChange={getInput}
          name="inputText"
        />
        <span>{error ? error : ''}</span>
      </>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
}