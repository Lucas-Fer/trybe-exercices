import React, { Component } from 'react'
import colorData from '../colorsData'
import Image from './Image';
export default class ChangeColorImage extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
    this.getInput = this.getInput.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  // função quse vai receber o input
  getInput(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  changeColor() {
    if (this.state.inputText === "") return '#000'
    // procurar a primeira cor que condiz com o input
    const color = colorData.find((color) => (color.name.includes(this.state.inputText)))
    // retorna a cor hexadecimal
    if (color) return color.hex;
    return '#000'
  }

  render() {
    return (
      <main>
         {/* O VALUE é um valor inicial, definido como uma string dentro da função "constructor"
        */}
        <input onChange={this.getInput} value={this.state.inputText} type="text" />
        <Image backgroundColor={this.changeColor()}/>
      <ul>
          {colorData
            .filter((color) => color.name.includes(this.state.inputText))
            .map((color) => (
          <li key={color.hex}>
            <div
              className="display-color"
              style={{ backgroundColor: color.hex }}>
            </div>
            {color.name}
          </li>
        ))}
        </ul>
      </main>
    )
  }
}