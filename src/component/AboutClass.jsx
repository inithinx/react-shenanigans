import React, { Component } from 'react'

export default class AboutClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            work: this.props.work,
            count: 0,
            msg: "temp"
        }
    }
    clickEvent(){
        console.log("Button.")
        this.setState({
            count: this.state.count + 1
        }
        )
    }
    mouseHoverEvent(){
        console.log("Hello from Hover!")
    }

    inputChange(event){
        this.setState({msg: event.target.value})
    }
    render() {
        this.state.name = "Sanjay"
        this.state.work = "Pentester"
        return (
        <div>AboutClass: <br></br>
        <b>Name:</b> {this.state.name}<br></br>
        <b>Work:</b> {this.state.work}<br></br>
        <button onClick={()=>this.clickEvent()}>Click</button><br></br>
        <button onMouseOver={()=>this.mouseHoverEvent()} onClick={()=>this.clickEvent()}>Hover</button><br></br>
        <b>Count:</b> {this.state.count}<br></br>
        <b>Msg:</b> {this.state.msg}<br></br>
        <input name='id1' onChange={(event) => this.inputChange(event)} /><br></br>
        </div>
        )
   }
}