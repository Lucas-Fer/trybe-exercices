import React, { Component } from 'react';

import InputName from './InputName';
import InputEmail from './InputEmail';
import InputCpf from './InputCpf';
import InputAdress from './InputAdress';
export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      inputEmail: '',
      inputCpf: '',
      inputAdress: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { inputName, inputEmail, inputCpf, inputAdress } = this.state;
    const { handleInput } = this;
    return (
      <form>

        <fieldset>
          <h1>Dados pessoais</h1>
          <InputName
            handleInput={handleInput}
            value={inputName}
          />

          <InputEmail
            handleInput={handleInput}
            value={inputEmail}
          />

          <InputCpf
            handleInput={handleInput}
            value={inputCpf}
          />

          <InputAdress
            handleInput={handleInput}
            value={inputAdress}
          />
          
          <InputAdress
            handleInput={handleInput}
            value={inputAdress}
          />

        </fieldset>
      </form>

    );
  }
}
