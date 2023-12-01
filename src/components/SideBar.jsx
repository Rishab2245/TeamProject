import React, { useState } from 'react'
import './SideBarcss.css';
import ProjectButtonBind from './ProjectButtonBind'
import MemberButtonbind from './MemberButtonBind';
import AddProject from './AddProject';
import axios from 'axios';

const SideBar = ({profunc,projectdata}) => {

  const getboards = async () =>{
    try{
      let response = await axios.get("http://teammanagement.onrender.com/api/board/getBoards",{
        headers:{
          withCredentials:true,
          'Access-control-Allow-Origin':'*'
        }
      })
      console.lot(response)
    }
    catch(e){console.log(e)}
  }
  // getboards();
console.log(projectdata);

  return (
    <div className='side'>
      <ProjectButtonBind project={projectdata}/>
      <MemberButtonbind/>
      <AddProject profunc={profunc}/>
    </div>
  )
}
export default SideBar
