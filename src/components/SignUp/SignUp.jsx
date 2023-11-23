import React from "react";
import axios from "axios";
import "./Signup.css"
import signup from "../images/signup.png"
import Logo from "../images/Logo.png"

const SignUp = () => {
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
                                <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                                <hr />
                            </div>
                            <div>
                                <input type="text" name="email" id="email" placeholder="Email" autoComplete="off" />
                                <hr />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <hr />
                            </div>
                        </div>
                        <button id="signupbtn">SIGN UP</button>
                    </form>
                    <figure className="img">
                        <img src={signup} alt="Image" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default SignUp;