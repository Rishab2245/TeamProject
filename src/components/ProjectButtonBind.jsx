import React, { useEffect, useState } from 'react'
import ProjectButton from './ProjectButton'
import './ProjectButtonBindcss.css'
const ProjectButtonbind = ({project}) => {

let [data,setdata] = useState([

]);
console.log(project);
useEffect(()=>{
  let temp = data.map((e)=>{
    return (
      {...e , ["bol"]:"true"}
    )
  })
  setdata(temp);
  
  if(project.Project!=""){
  setdata((p)=>{return([...p,{value:`${project.Project}` , bol:`${project.bol}` , description:`${project.description}`}])})
  }
},[project])

console.log(data);

const activeproj = (e) =>{
  let temp = data.map((ev)=>{
    return(
      {...ev,["bol"]: e.target.innerText == ev.value ? "false" : "true" }
    )
  })
  setdata(temp);
}
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
             <ProjectButton key={idx} value={e.value} bol={e.bol} acpj={activeproj}/>
        ))
       }
    </div>
    </div>
    </>
  )
}

export default ProjectButtonbind