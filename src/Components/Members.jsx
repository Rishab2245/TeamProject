import axios from 'axios'
import React, { useState } from 'react'

const Members = ( {members , auth , change , seterr ,setmembers}) => {
let [email , setemail] =useState("")


const handlechange = (e) => {

setemail(e.target.value)

}
const submit = async () => {
console.log(members , auth ,email)
try{
    let response = await axios.post(`https://teammanagement.onrender.com/api/board/addMember/${members[0].id}` ,{"email":`${email}`},{headers:{authorization:auth}})
    console.log(response.data.board.members)
    setmembers((p)=>{
        let temp = p.map((e)=>{
            console.log({...e , ["members"]:response.data.board.members})
            return({...e , ["members"]:response.data.board.members})
        })
        console.log(temp)
        return(temp)
    });
    console.log(members)

}
catch(e){
    console.log(e);
    seterr(true);
    setInterval(() => {
        seterr(false);
    }, 3000);

}
change();
}



  return (
    
    <div style={{ position:"absolute", top:"2rem", width:"100%", display:"flex", alignItems:"center" , justifyContent:"center" }}>
        <span><input type="email" style={{width:"", padding:"0.2rem", borderRadius:"1rem 0 0 1rem",  border:"none", margin:"0 0 0.41rem 0"}} name='email' placeholder='Email...' onChange={handlechange} value={email}/></span>
        <button style={{padding:"0.2rem" , fontSize:"0.9rem" , border:"none", background:"#0d3b66",borderRadius:" 0 1rem  1rem 0 ", color:"white"}} onClick={submit}>Add</button>
    </div>

  )
}

export default Members