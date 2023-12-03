import React, { useEffect, useState } from 'react'
import MemberButton from './MemberButton'
import "./MemberButtonBindcss.css"
import axios from 'axios';
import Members from './Members';


const MemberButtonbind = ({members , auth , setmembers , setnewmem}) => {

let [data,setdata] = useState([]);
let [toggle,settoggle] = useState(false);
let [err , seterr] = useState(false);


const change = () => {
  settoggle(!toggle);
  console.log("hellow")
}


  useEffect(() => {
    console.log(members);
    if (members[0] != undefined) {
      let temp = members[0].members;
      console.log(temp);
      setdata([]);
      temp.forEach(async (e) => {
        let temp = await memlist(e);
        setdata((pr) => ([...pr, { value: `${temp.data.name}`, bol: false, link: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" }]));
        console.log(data);
      })

    }

},[members])

useEffect(()=>{
  setnewmem(members);
},[members])

  console.log(auth)
  console.log(data)
  const memlist = async (e) => {
    try {
      let response = await axios.get(`https://teammanagement.onrender.com/api/user/getUserDetails/${e}/`, { headers: { Authorization: auth } });
      return response;
    }
    catch (err) {
      return err;
    }
  }

  // const set = async (e)=>{
  //   console.log(e)
  //   let temp = await e;

  //     console.log(temp);


  // }





  return (
    <>
    <div className='membersection'>
    <div className='memberheading' style={{position:"relative"}}>
    <h3>Members :-</h3>
    <span onClick={change} style={{cursor:"pointer"}}>+</span>
    {
      toggle && <Members members={members} auth={auth} change={change} seterr={seterr} setmembers={setmembers}/>
    }
    {    err && <h3 style={{color:"black"}}>enter the register email</h3>   } 
   
    </div>
    <div  style={{padding:"0.2rem"}}>
       {
        data.map((e , idx)=>(
          <MemberButton  key={idx} value={e.value} bol={e.bol} link={e.link}/>
        ))
       }
    </div>
    </div>
    </>
  )
}

export default MemberButtonbind