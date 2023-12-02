import React from 'react'
import "./ProjectButtoncss.css"

const ProjectButton = ({key,value,bol,acpj}) => {
  return (
    <div className='project-button' key={key}>
        <button style={bol=="true"?{backgroundColor:"#202429" , color:"white"}:{backgroundColor:"#0d3b66" , color:"white"}} onClick={acpj} >{value}</button>
    </div>
  )
}

export default ProjectButton