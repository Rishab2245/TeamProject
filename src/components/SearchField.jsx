import React from 'react'
import search from "../assets/search.png"

const SearchField = () => {
  return (
    <div style={{display:'flex', gap:"0.5rem", justifyContent:"center" , alignItems:"center", marginLeft:"1rem"}}>
        <span><img src={search} style={{height:"1rem", color:"white"}} alt="" /></span>
        <input type="text" placeholder="Search" style={{borderRadius:"0.5rem", border:"1px solid #b9b9b9",  width:"15rem", padding:"0.2rem",margin:"0"}}/>
    </div>
  )
}

export default SearchField