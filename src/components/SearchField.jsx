import React from 'react'
import search from "../assets/search (1).png"

const SearchField = () => {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
        <span><img src={search} style={{height:"1.5rem"}} alt="" /></span>
        <input type="text" placeholder="Search" style={{borderRadius:"0.5rem", border:"1px solid #b9b9b9",  width:"15rem", padding:"0.2rem"}}/>
    </div>
  )
}

export default SearchField