import React from 'react'
import './Tabscss.css'
const Tabs = ({type, settype}) => {
  return (
    
    <div className='navbutton'>
        <button onClick={()=>settype("tasks") } className={`${type === "tasks" && "click"}`}> Tasks </button>
        <button onClick={()=>settype("chat")} className={`${type === "chat" && "click"}`}>Chat</button>
        <button onClick={()=>settype("progress")} className={`${type === "progress" && "click"}`}>Progress</button>
    </div>
    
  )
}

export default Tabs