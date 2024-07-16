import React, { Component } from 'react'
import "./Fruits.css"

export default class Card extends Component {
  render() {
    return (
      <div className='container'>
        <img 
        className='img'
        src={this.props.src} />
        <h3 className='title'>{this.props.title}</h3>
      </div>
    )
  }
}
