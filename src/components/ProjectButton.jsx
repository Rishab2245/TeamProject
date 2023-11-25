import React from 'react'
import "./ProjectButtoncss.css"

const ProjectButton = ({value,bol}) => {
  return (
    <div className='project-button'>
        <button style={bol?{backgroundColor:"#cfebff"}:{backgroundColor:"#302c51" , color:"white"}}>{value}</button>
    </div>
  )
}

export default ProjectButton