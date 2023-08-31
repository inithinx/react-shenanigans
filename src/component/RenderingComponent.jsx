import React, { Component } from 'react'
export default class RenderingComponent extends Component {
    constructor(props){ super(props) 
        this.state = {
            text: "condition",
            show: false,
            fruits: ["Apple", "Orange", "Banana", "Mango", "Strawberry"]
        }
    }
    changeShow(){ this.setState({show: !this.state.show}) }

    render() {
        var variable = this.state.show ? 'Hide': 'Show'
        return (
            <>
            <ul>
                { this.state.fruits.map((fruit,index) => {return <li>{index}:{fruit}</li>}) }
            </ul>
            <div> Rendering Component: </div>
            {this.state.show && this.state.text}
            <button onClick={()=> this.changeShow()}>{variable}</button>
            </>
        )
    }
}
