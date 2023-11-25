import React from 'react'
import ProjectButton from './ProjectButton'
import './ProjectButtonBindcss.css'
const ProjectButtonbind = () => {
    
let data = [
    {value:"hello",bol:false},
    {value:"hello",bol:true},
    {value:"hello",bol:true},
    {value:"hello",bol:true},
]
  return (
    <>
    <div className='projectsection'>
    <div className='projectheading'>
    <h3>Projects :-</h3>
    <span>+</span>
    </div>
    <div  style={{padding:"0.2rem"}}>
       {
        data.map((e,idx)=>(
            <ProjectButton key={idx} value={e.value} bol={e.bol}/>
        ))
       }
    </div>
    </div>
    </>
  )
}

export default ProjectButtonbind