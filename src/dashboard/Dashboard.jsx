import Header from '../components/Header'
import SideBar from '../components/SideBar'
import "./Dash.css"
import MainSection from '../components/MainSection'
// import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import AddProject from '../NewPro/NewPro'
import axios from 'axios'
import Cookies from 'js-cookie'

const Dashboard = () => {
  let [add, setadd] = useState(false)
  const location = useLocation();
  const[boarddata,setboarddata] = useState([]);
  let [projedata, setprojedata] = useState({ Project: "", discription: "" });
  let [members,setmembers] = useState([]);
  // const auth = location.state.auth
  console.log(projedata)
  console.log(boarddata)

  const profunc = () => {
    setadd(!add);
    console.log("add")
  }
  const token = Cookies.get('token');
  const GetBoards = async () => {
    try {
      const response = await axios.get('https://teammanagement.onrender.com/api/board/getBoards/', {
        headers: {
          withCredentials: true,
          'Authorization': token
        }
      })
      setboarddata(response.data.boards)
      console.log(response.data.boards)
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetBoards();
  }, [setboarddata])

  return (
    <>
      <Header />
      <div className='below'>
        <SideBar profunc={profunc} projectdata={projedata}  auth = {token} boarddata={boarddata} members={members} setmembers={setmembers}/>
          <MainSection profunc={profunc} setprojectdata={setprojedata} add={add} auth={token} setmembers={setmembers}/> 
      </div>
    </>
  )
}
export default Dashboard