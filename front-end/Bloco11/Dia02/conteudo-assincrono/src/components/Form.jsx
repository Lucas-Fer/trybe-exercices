import React, { Component } from 'react';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';
import InputSelect from './InputSelect';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      inputText: '',
      inputCheckbox: false,
      inputSelect: '',
      formError: true,
    };

    this.getInput = this.getInput.bind(this);
  }

  getInput = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleErros = () => {
    const { name } = this.state;
    const erros = [
      !name.string,
    ];

    const istOk = erros.every((error) => error !== true);

    this.setState({
      formError: !istOk,
    })
  };

  render() {

    const { getInput } = this;
    const { inputText, inputCheckbox, inputSelect, formError } = this.state;

    return (
      <div>

        <InputSelect value={inputSelect} getInput={getInput} />

        <InputText value={inputText} getInput={getInput} />

        <InputCheckbox value={inputCheckbox} getInput={getInput} />

        {formError
          ? <span style={{ color: 'red' }}>Preencha todos os campos</span>
          : <span style={{ color: 'green' }}>Todos campos foram preenchidos</span>}
      </div>
    );
  }
}
