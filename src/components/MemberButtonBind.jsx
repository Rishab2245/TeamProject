import React from 'react'
import MemberButton from './MemberButton'
import "./MemberButtonBindcss.css"


const MemberButtonbind = () => {
    
let data = [
    {value:"hello",bol:false  ,link:"https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"},
    {value:"hello",bol:true , link:"https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"},
    {value:"hello",bol:true , link:"https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"},
    {value:"hello",bol:true , link:"https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"},
]
  return (
    <>
    <div className='membersection'>
    <div className='memberheading'>
    <h3>Members :-</h3>
    <span>+</span>
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