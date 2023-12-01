import React from 'react'
import "./ProjectButtoncss.css"

const ProjectButton = ({key,value,bol,acpj}) => {
  return (
    <div className='project-button' key={key}>
        <button style={bol?{backgroundColor:"#cfebff"}:{backgroundColor:"#302c51" , color:"white"}} onClick={acpj} >{value}</button>
    </div>
  )
}

export default ProjectButton