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
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let [add, setadd] = useState(false)
  const location = useLocation();
  const[boarddata,setboarddata] = useState([]);
  let [projedata, setprojedata] = useState({ Project: "", discription: "" });
  let [members,setmembers] = useState([]);
  let [tododata , settododata] = useState([]);

  const user_id = Cookies.get('id');
  // const auth = location.state.auth
  console.log(projedata)
  console.log(boarddata)
  console.log(tododata)

  const navigate = useNavigate();

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

  const CheckUserDetails = async () => {
    try{
      const response = await axios.get(`https://teammanagement.onrender.com/api/user/getUserDetails/${user_id}`,{
        headers:{
          'Authorization': token
        }
      })
      if (!response.data.experience){
        const name = response.data.name;
        navigate('/userdetails',{state: {id:1,name:name}})
      }
    }
    catch(error){
      console.log("ERROR");
      console.log("ERROR");
      console.log("ERROR");
      console.error(error);
      console.log("ERROR");
      console.log("ERROR");
      console.log("ERROR");

    }
  }

  useEffect(() =>{
    CheckUserDetails()
  },[])

  useEffect(() => {
    GetBoards();
  }, [setboarddata])

  return (
    <div style={{height:"100%", width:"100%",display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
      <Header/>
      <div className='below'>
        <SideBar profunc={profunc} projectdata={projedata} setadd={setadd}  auth = {token} boarddata={boarddata} members={members} setmembers={setmembers} settododata={settododata} setboarddata={setboarddata}/>
          <MainSection profunc={profunc} setprojectdata={setprojedata} add={add} auth={token} setmembers={setmembers} tododata={tododata}/> 
      </div>
    </div>
  )
}
export default Dashboard