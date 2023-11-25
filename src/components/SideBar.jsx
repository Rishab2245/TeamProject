import React from 'react'
import './SideBarcss.css';
import ProjectButtonBind from './ProjectButtonBind'
import MemberButtonbind from './MemberButtonBind';
import AddProject from './AddProject';

const SideBar = () => {
  return (
    <div className='side'>
      <ProjectButtonBind/>
      <MemberButtonbind/>
      <AddProject/>
    </div>
  )
}

export default SideBar