import React, { useState } from 'react'
import Tabs from "./Tabs"
import Todo from "../../TaskSection/Todo";
//import ProgressReport from '../progress/Progress';

const Navbar = ({auth , tododata}) => {
    let [type,settype] = useState("tasks")
    console.log(tododata)
  return (
    <>
        <div className='bar' style={{height:"10%", width:"100%"}}>
        <Tabs type={type} settype={settype}/>
      </div>
      {type === "chat" && (
        <div style={{height:"80%", width:"100%"}}>
         <h1>chats</h1>
        </div>
      )}
      {type === "tasks" && (
        <div style={{height:"80%", width:"100%"}}>

        <Todo auth={auth} tododata={tododata}/>
        </div>
      )}
      {type === "progress" && (

      
         

        <div style={{height:"80%", width:"100%"}}>

          <h1>progress</h1>
        </div>
      )}
    </>
  )
}

export default Navbar
