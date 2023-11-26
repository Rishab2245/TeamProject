import React from "react";
import Logo from "../assets/Logo.png"
import { useState } from "react";
import axios from "axios";
import "./Login.css"
import login from "../assets/login.jpg"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate('');

    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setMail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    }
    const Submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://teammanagement.onrender.com/api/user/login", {
                "email": email,
                "password": password,
            })
            console.log(response);
            navigate(`/dashboard`, { state: { id: 1, email: email } });

        }
        catch (error) {
            console.error(error);
            setDisplay(true);
        }
    }
    return (
        <div className="login-signup-hero">
            <div className="nav">
                <figure>
                    <img src={Logo} alt="" className="logo" />
                    <h1>&nbsp;Teemify</h1>
                </figure>
                <div className="sub-nav">
                    <h3>Home</h3>
                    <h3>Contact</h3>
                    <h3>About Us</h3>
                </div>
                <div className="sub-buttons">
                    <Link to={'/signup'}>
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
            <div className="login-main">
                <div className="container">
                    <figure className="img">
                        <img src={login} alt="Image" />
                    </figure>
                    <form onSubmit={Submit}>
                        <h2>User Login</h2>
                        <div className="f-container">
                            <div>
                                <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" required={true} onChange={HandleChange} className="mail-input" />
                            </div>
                            <div id="forgot-button">
                                <input type="password" name="password" id="password" placeholder="Password" required={true} onChange={HandleChange} className="password-input" />
                                <Link to={'/forgot'}>
                                <p>Forgot Password?</p>
                                </Link>
                            </div>
                            <div className="buttons">
                                <button type="submit">LOGIN</button>
                            </div>


                        </div>
                        {display && (
                            <h3 id="span">Please enter the correct credentials</h3>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;