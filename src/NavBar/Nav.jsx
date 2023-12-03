import React from "react";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return(
        <div className="main-nav">
          <div className="logo">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                <rect x="0.370117" width="52" height="52" fill="white"/>
                <rect x="9.37012" y="10" width="13" height="33" fill="black"/>
                <rect x="25.3701" y="10" width="16" height="14" fill="black"/>
                </svg>
            </div>
               <div> <h1>Teemify</h1></div>
            </div>
            <div className="nav-buttons">
                <Link to={'/login'}>
                    <button id="b">Login</button>
                </Link>
                <Link to={'/signup'}>
                    <button id="a">Signup</button>
                </Link>
            </div>
        </div>
    )
}
export default Nav;