import Header from '../components/Header'
import SideBar from '../components/SideBar'
import "./Dash.css"
import MainSection from '../components/MainSection'
// import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import AddProject from '../AddProj/AddProject'

const Dashboard = () => {
  let [add,setadd]=useState(false)
  const loacation = useLocation();
  let[projedata,setprojedata] = useState({Project:"",discription:""});
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
          <MainSection profunc={profunc} setprojectdata={setprojedata} add={add}/> 
        
      </div>
      </>
  )
}
export default Dashboard