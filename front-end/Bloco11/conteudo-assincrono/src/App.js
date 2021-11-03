import React, { Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      cliques: 0
    }
  }
  handleClick() {
    this.setState((anterior, _props) => ({
      cliques: anterior.cliques + 1
    }))
}
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.cliques}</button>
    )
  }
}

export default App;
