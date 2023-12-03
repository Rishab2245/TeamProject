import React, { useState } from 'react'
import './SideBarcss.css';
import ProjectButtonBind from './ProjectButtonBind'
import MemberButtonbind from './MemberButtonBind';
import AddProject from './AddProject';
import axios from 'axios';
const SideBar = ({profunc,projectdata,boarddata,auth,settododata , setadd , setboarddata}) => {
  
  // getboards();
console.log(projectdata);
console.log(boarddata);

 let [members,setmembers] = useState([]);
 let [newmem,setnewmem] = useState([]);
  return (
    <div className='side'>
      <ProjectButtonBind project={projectdata} boarddata={boarddata} profunc={profunc} setmembers={setmembers} settododata={settododata} newmem={newmem} setadd={setadd} setboarddata=
      {setboarddata}/>
      <MemberButtonbind members={members} auth={auth} setmembers={setmembers} setnewmem={setnewmem}/>
      <AddProject profunc={profunc}/>
    </div>
  )
}

export default SideBar
