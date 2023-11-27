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
  let [add, setadd] = useState(false)
  const location = useLocation();
  let [projedata, setprojedata] = useState({ Project: "frontend", discription: "hellow world" });
  console.log(location.state.auth);
  const auth = location.state.auth

  const profunc = () => {
    setadd(!add);
    console.log("add")
  }
  const GetBoards = async () => {
    try {
      const response = await axios.get('https://teammanagement.onrender.com/api/board/getBoards/', {
        headers: {
          withCredentials: true,
          'Authorization':auth
        }
      })
      console.log(response)
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    GetBoards();
  }, [])

  return (
    <>
      <Header />
      <div className='below'>
        <SideBar profunc={profunc} projectdata={projedata} />
        {
          add ? <MainSection /> : <AddProject profunc={profunc} setprojectdata={setprojedata} />
        }
      </div>
    </>
  )
}
export default Dashboard