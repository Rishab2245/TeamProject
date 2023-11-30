import React, { useState } from 'react'
import './SideBarcss.css';
import ProjectButtonBind from './ProjectButtonBind'
import MemberButtonbind from './MemberButtonBind';
import AddProject from './AddProject';
import axios from 'axios';
const SideBar = ({profunc,projectdata,boarddata,auth}) => {
  
  // getboards();
console.log(projectdata);
console.log(boarddata);

 let [members,setmembers] = useState([]);
  return (
    <div className='side'>
      <ProjectButtonBind project={projectdata} boarddata={boarddata} profunc={profunc}v  setmembers={setmembers}/>
      <MemberButtonbind members={members} auth={auth}/>
      <AddProject profunc={profunc}/>
    </div>
  )
}

export default SideBar
