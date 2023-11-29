import React from 'react'
import profile from '../assets/profile.jpg'
import bell from '../assets/bell.png'

const UserIcon = ({user}) => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
      <div>
        <img src={bell} alt="bell" />
      </div>
      <div style={{display:"flex", gap:"0.5rem", alignItems:"center", marginRight:"2rem"}}>
        <img src={profile} alt=""  style={{height:"1.5rem", borderRadius:"50%"}}/>
        {
          user.map((e)=>(
            <h2 style={{fontSize:"1rem", color:"white"}}>{e.name}</h2>
          ))
        }
    </div>
    </div>
  )
}
export default UserIcon
