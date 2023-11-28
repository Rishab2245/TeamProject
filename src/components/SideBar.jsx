import React, { useState } from 'react'
import './SideBarcss.css';
import ProjectButtonBind from './ProjectButtonBind'
import MemberButtonbind from './MemberButtonBind';
import AddProject from './AddProject';
import axios from 'axios';

const SideBar = ({profunc,projectdata}) => {

  
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
