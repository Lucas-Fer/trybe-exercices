import React, { Component } from 'react'
import Options from './Options';
import InputText from './InputText';
import InputEmail from './InputEmail';
import TextArea from './TextArea';
import Checkbox from './Checkbox';
class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputText: '',
      inputEmail: '',
      options: '',
      textArea: '',
      verification: false,
    };
  }

  handleErros() {

  }
  // desestruturar o target de event.target
  handleChange({ target }) {
    // destructuring name de target.name
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        
        <form className="form">

          <Options
            value={this.state.options}
            handleChange={this.handleChange}
          />
        
          <InputText
            value={this.state.inputText}
            handleChange={this.handleChange}
          />

          <InputEmail
            value={this.state.inputEmail}
            handleChange={this.handleChange}
          />

          <TextArea handleChange={this.handleChange} value={this.state.textArea} />

          <Checkbox 
            value={this.state.verification}
            handleChange={this.handleChange}
          />

        </form>
      </div>
    );
  }
}

export default Form;