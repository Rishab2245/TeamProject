import React from 'react'
import "./MemberButtoncss.css"

const MemberButton = ({value,bol,link}) => {
  return (
    <div className='member-button'>
    <div style={bol?{backgroundColor:"#202429"}:{backgroundColor:"#0d3b66"}}><img src={link}/>{value}</div>
</div>
  )
}

export default MemberButton