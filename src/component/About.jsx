import React, { useState } from 'react'

export default function About(props) {
  function click(){ console.log("Click.") }
  const[name,setName] = useState("About function")
  function clickEvent(){console.log("Click events!")}
  function inputChange(event){setName(event.target.value)}
  return (
    <div>About:<br></br>
        <b>name:</b> {props.name} <br></br>
        <b>work:</b> {props.work} <br></br>
        <button onClick={()=>click()}>button</button> <br></br>
        <button onClick={()=>clickEvent()}>Click</button><br></br>
        <b>Username: </b>{name}<br></br> 
        <input name='id2' onChange={(event) => inputChange(event)} />
    </div>
  )
}