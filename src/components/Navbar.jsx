import React, { useState } from 'react'
import Tabs from "./Tabs"
import Todo from "../../TaskSection/Todo";
import ProgressReport from '../progress/Progress';

const Navbar = ({auth , tododata}) => {
    let [type,settype] = useState("chat")
    console.log(tododata)
  return (
    <div>
      <div className='bar'>
        <Tabs type={type} settype={settype} />
      </div>
      {type === "chat" && (
        <div>
          <h1>chats</h1>
        </div>
      )}
      {type === "tasks" && (
        <div>

        <Todo auth={auth} tododata={tododata}/>
        </div>
      )}
      {type === "progress" && (
        <div>
          <ProgressReport/>
        </div>
      )}
    </div>
  )
}

export default Navbar