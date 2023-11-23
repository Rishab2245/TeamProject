import React from "react";
import Logo from "../images/Logo.png"
import { useState } from "react";
import axios from "axios";
import signup from "../images/signup.png"
import "../SignUp/Signup.css"
import login from "../images/Login.png"

const Login = () => {
    return (
        <div className="hero">
            <div className="nav">
                <figure>
                    <img src={Logo} alt="" />
                </figure>
                <h1>&nbsp;Teemify</h1>
            </div>
            <div className="main">
                <h2>SignUp</h2>
                <div className="container">
                    <form>
                        <div className="form-container">
                            <div>
                                <input type="email" name="email" id="email" placeholder="Email" autoComplete="off"required={true}/>
                                <hr />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" required={true}/>
                                <hr />
                            </div>
                        </div>
                        <button>SIGN UP</button>
                    </form>
                    <figure className="img">
                        <img src={login} alt="Image" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default Login;