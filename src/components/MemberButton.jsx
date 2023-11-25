import React from 'react'
import "./MemberButtoncss.css"

const MemberButton = ({value,bol,link}) => {
  return (
    <div className='member-button'>
    <div style={bol?{backgroundColor:"transparent"}:{backgroundColor:"#302c51" , color:"white"}}><img src={link}/>{value}</div>
</div>
  )
}

export default MemberButton