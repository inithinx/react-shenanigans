import React, { Component } from 'react'
export default class RenderingComponent extends Component {
    constructor(props){ super(props) }
    render() {
        return (
            <div>RenderingComponent</div>
            {this.state.show && this.state.text}
            <button onClick={()=> this.changeShow()}>{this.state.show ? }
                </button>
        )
    }
}
