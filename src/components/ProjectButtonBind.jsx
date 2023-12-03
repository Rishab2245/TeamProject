import React, { useEffect, useState } from 'react'
import ProjectButton from './ProjectButton'
import './ProjectButtonBindcss.css'
const ProjectButtonbind = ({project,boarddata , profunc , setmembers , settododata , newmem , setadd} ) => {


  let [data, setdata] = useState([
  ]);
  console.log(boarddata);
  let temp = boarddata.map((e) => (
    { value: e.name, description: e.description, id: e._id, bol: "true", members: e.members }
  ));

  useEffect(() => {
    setdata(temp);
    console.log(temp);
  }, [boarddata]);

  // setdata()
  console.log(data);
  useEffect(() => {
    let temp = data.map((e) => {
      return (
        { ...e, ["bol"]: "true" }
      )
    })

    setdata(temp);
    console.log(project);
    if (project.value != "") {
      console.log(project);
      setdata((p) => { return ([...p, project]) })
    }
  }, [project])

  console.log(data);

const activeproj = (e) =>{
  let temp = data.map((ev)=>{
    return(
      {...ev,["bol"]: e.target.innerText == ev.value ? "false" : "true" }
    )
  })
  setdata(temp);

}

useEffect(()=>{
  let mem = data.filter((e)=>(e.bol == "false"));
  console.log(mem);
  settododata(mem);
  setmembers(mem);
  // setadd(true);
},[data])

useEffect(()=>{
  console.log(newmem);

  let temp = data.map((e)=>{
    if(e.bol == "false"){
      return newmem[0]
    }
    else{
      return e
    }

    
  })

 
  

},[newmem])
  return (
    <>
      <div className='projectsection'>
        <div className='projectheading'>
          <h3>Projects :-</h3>
          <span onClick={profunc} style={{ cursor: "pointer" }}>+</span>
        </div>
        <div style={{ padding: "0.2rem" }}>
          {
            data.map((e, idx) => (
              <ProjectButton key={idx} value={e.value} bol={e.bol} acpj={activeproj} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ProjectButtonbind