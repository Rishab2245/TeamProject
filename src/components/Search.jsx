import React from 'react'
import UserIcon from './UserIcon'

const Search = () => {

  let user = [{
    name:"user",
    email:"user@example.com",
    experience:"experience",
    speciality:"speciality",
    bio:"abcd"
  }]

  return (
    <div style={{display:"flex", width:"100%", justifyContent:"flex-end" , background:"rgba(0,0,0,0.52)", padding:"0.5rem 0", height:"5%"}}>
       
        <UserIcon user={user} />
    </div>
  )
}

export default Search