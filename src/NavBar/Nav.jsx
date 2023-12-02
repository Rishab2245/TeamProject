import React from "react";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return(
        <div className="main-nav">
            <figure>
                <img src={Logo} alt="" />
                <h1>Teemify</h1>
            </figure>
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