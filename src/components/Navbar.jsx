import React, { useState } from 'react'
import Tabs from "./Tabs"
import Todo from "./Todo"


const Navbar = ({auth}) => {
    let [type,settype] = useState("chat")
  return (
    <div>
        <div className='bar'>
        <Tabs type={type} settype={settype}/>
      </div>
      {type === "chat" && (
        <div>
         <h1>chats</h1>
        </div>
      )}
      {type === "tasks" && (
        <div>

        <Todo auth={auth}/>
        </div>
      )}
      {type === "progress" && (
        <div>

        <h1>progress</h1>
        </div>
      )}
    </div>
  )
}

export default Navbar