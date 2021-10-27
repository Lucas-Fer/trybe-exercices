import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    const learn = 'React';
    return (
      < div >
        <h1>Lucas Sousa Fernandes</h1>
        <p>Meu primeiro componente em React</p>
        <p>Estou aprendendo {learn}</p>
      </div >
    );
  }
}
export default AboutMe;