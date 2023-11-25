import React from 'react'
import Logo from "../assets/Logo_Teemify.png"
import "./Head.css"

const Header = () => {
  return (
    <div className='header'>
    <img src={Logo} alt="" />
    <h1>Teemify</h1>
    </div>
  )
}

export default Header