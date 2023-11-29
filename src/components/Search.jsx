import React from 'react'
import SearchField from './SearchField'
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
    <div style={{display:"flex", width:"100%", justifyContent:"space-between" , background:"rgba(0,0,0,0.52)", padding:"0.5rem 0"}}>
        <SearchField/>
        <UserIcon user={user} />
    </div>
  )
}

export default Search