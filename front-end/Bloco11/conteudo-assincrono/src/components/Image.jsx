import React, { Component } from 'react'
import image from  '../trybe.png'
export default class Image extends Component {
  render() {
    const { backgroundColor } = this.props
    return (
      <div className="wrapper" style={{ backgroundColor: backgroundColor }}>
        <img style={{ backgroundColor: backgroundColor }} src={image} alt="logo" />
      </div>
    )
  }
}
