import React, { useEffect, useState } from 'react'
import ProjectButton from './ProjectButton'
import './ProjectButtonBindcss.css'
const ProjectButtonbind = ({project}) => {

let [data,setdata] = useState([

]);
console.log(project);
useEffect(()=>{
  setdata((p)=>{return([...p,{value:`${project.Project}` , bol:`${true}`}])})
},[project])
console.log(data);

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