import Header from '../components/Header'
import SideBar from '../components/SideBar'
import "./Dash.css"
import MainSection from '../components/MainSection'
// import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import React, { useState } from 'react'
import AddProject from '../AddProj/AddProject'

const Dashboard = () => {
  let [add,setadd]=useState(false)
  const loacation = useLocation();
  let[projedata,setprojedata] = useState({Project:"frontend",discription:"hellow world"});
  console.log(loacation.state.email);

  const profunc = ()=>{
    setadd(!add);
    console.log("add")
  }
  return (
    <>
      <Header />
      <div className='below'>
        <SideBar profunc={profunc} projectdata={projedata}/>
        {
          add ? <MainSection/> : <AddProject profunc={profunc} setprojectdata={setprojedata}/>
        }
      </div>
      </>
  )
}
export default Dashboard