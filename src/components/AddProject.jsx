import React from 'react'
import "./AddProjectcss.css"

const AddProject = ({profunc}) => {

  let hml=()=>{
    profunc();
    console.log("AddProject")
  }
  return (
    <div className='add-project-button'>
    <button onClick={profunc} name={"addp"} style={{color:"white"}}>Add Project</button>
</div>
  )
}
export default AddProject
