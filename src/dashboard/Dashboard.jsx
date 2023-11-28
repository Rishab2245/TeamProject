import Header from '../components/Header'
import SideBar from '../components/SideBar'
import "./Dash.css"
import MainSection from '../components/MainSection'
// import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import AddProject from '../AddProj/AddProject'
import axios from 'axios'

const Dashboard = () => {
  let [add,setadd]=useState(false)
  const loacation = useLocation();
  let[projedata,setprojedata] = useState({Project:"",discription:""});
  console.log(loacation.state.email);
  console.log(loacation.state.authorisation);
  const auth =   loacation.state.authorisation;
  const profunc = ()=>{
    setadd(!add);
    console.log("add")
  }
  return (
    <>
      <Header />
      <div className='below'>
        <SideBar profunc={profunc} projectdata={projedata}  auth = {auth}/>
          <MainSection profunc={profunc} setprojectdata={setprojedata} add={add} auth={auth}/> 
      </div>
      </>
  )
}
export default Dashboard