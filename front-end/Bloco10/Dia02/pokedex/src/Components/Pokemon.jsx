import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, moreInfo } } = this.props;
    return (
      <section className="pokemon">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} />
        <a href={moreInfo}>More information</a>
      </section>
    );
  }
}

export default Pokemon;