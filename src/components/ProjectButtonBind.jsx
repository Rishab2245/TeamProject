import React, { useEffect, useState } from 'react'
import ProjectButton from './ProjectButton'
import './ProjectButtonBindcss.css'
const ProjectButtonbind = ({ project, boarddata, profunc, setmembers }) => {


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

    if (project.Project != "") {
      setdata((p) => { return ([...p, { value: `${project.Project}`, bol: `${project.bol}`, description: `${project.description}` }]) })
    }

    setmembers(data)
  }, [project])

  console.log(data);

  const activeproj = (e) => {
    let temp = data.map((ev) => {
      return (
        { ...ev, ["bol"]: e.target.innerText == ev.value ? "false" : "true" }
      )
    })
    setdata(temp);

  }

  useEffect(() => {
    let mem = data.filter((e) => (e.bol == "false"));
    console.log(mem);
    setmembers(mem);
  }, [data])
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