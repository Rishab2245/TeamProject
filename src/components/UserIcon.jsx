import React from 'react'
import profile from '../assets/profile.jpg'
import bell from '../assets/bell.png'
import UserProfilePage from '../UserProfile/UserProfilePage'
import { useState } from 'react'

const UserIcon = ({user}) => {
  const [display,setDisplay] = useState(false);
  const RenderPopUp = () => {
    setDisplay(!display);
  }
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
      <div>
        <img src={bell} alt="bell" />
      </div>
      <div className="pop-up">
        {display && <UserProfilePage />}
      </div>
      <div style={{display:"flex", gap:"0.5rem", alignItems:"center", marginRight:"2rem"}}>
        <img src={profile} alt="" onClick={RenderPopUp} style={{height:"1.5rem", borderRadius:"50%",cursor:'pointer'}}/>
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
