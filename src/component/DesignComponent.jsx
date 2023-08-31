import React, { Component } from 'react'
import '../DesignComponent.css'

export default class DesignComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            btnStyle: {
                width: '100px',
                height: '25px',
                border: '2px solid white',
                borderRadius: '3px',
                fontSize: '12px'
            }
        }
    }
  render() {
    return (
        <>
        <button>Button without css</button>
        <button style={this.state.btnStyle}>js styling</button>
        <button className='button'>Style with class</button>
        </>
    )
  }
}