import React from 'react'
import profile from '../assets/profile.jpg'

const UserIcon = ({user}) => {
  return (
    <div style={{display:"flex", gap:"0.5rem", alignItems:"center"}}>
        <img src={profile} alt=""  style={{height:"2rem", borderRadius:"50%", boxShadow:"0 0 2px 0.01px gray"}}/>
        {
          user.map((e)=>(
            <h2 style={{fontSize:"1rem"}}>{e.name}</h2>
          ))
        }
    </div>
  )
}
export default UserIcon
