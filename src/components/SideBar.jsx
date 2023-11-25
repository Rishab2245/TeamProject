import React, { useState } from 'react'
import './SideBarcss.css';
import ProjectButtonBind from './ProjectButtonBind'
import MemberButtonbind from './MemberButtonBind';
import AddProject from './AddProject';

const SideBar = ({profunc}) => {


  return (
    <div className='side'>
      <ProjectButtonBind/>
      <MemberButtonbind/>
      <AddProject profunc={profunc}/>
    </div>
  )
}

export default SideBar