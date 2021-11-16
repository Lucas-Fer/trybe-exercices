import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      objectResult: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
  }

  fetchApi() {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
      .then((promiseResult) => promiseResult.json())
      .then((data) => this.setState({ objectResult: data.results }));
  }

  componentDidMount() {
    this.fetchApi();
  }
  render() {
    const { state: { objectResult } } = this;
    return (
      <div className="App">
        <h1>Api Rick and Mory</h1>
        <div className="body">
          {objectResult.map(({ name, id, image }) => (
            <div className="container" key={id}>
              <h2>{name}</h2>
              <img src={image} alt={name} />
            </div>

          ))}
        </div>
      </div>
    );
  }
}

export default App;
