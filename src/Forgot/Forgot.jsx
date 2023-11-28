import React from "react";
import forgot from "../assets/forgot.png"
import "./Forgot.css"
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";

const Forgot = () => {
    const [email, setEmail] = useState("");
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const HandleMail = (e) => {
        setEmail(e.target.value);
    }
    const HandleSubmit = async (e) => {
        setDisplay(false);
        e.preventDefault();
        try {
            await axios.post('https://teammanagement.onrender.com/api/user/password/resetEmail', {
                "email": email
            })
            navigate('/confirmOtp');
        }
        catch (error) {
            console.error(error);
            setDisplay(true);
        }
    }
    return (
        <div className="forgot-hero">
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
                    <Link to={'/login'}>
                        <button id="forgot-login">Login</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
            <div className="main-container">
                <figure>
                    <img src={forgot} alt="" />
                </figure>
                <form className="forgot-form" onSubmit={HandleSubmit}>
                    <h2>Forgot Password</h2>
                    <p>Enter your email</p>
                    <input type="email" name="email" id="mail" required placeholder="Email" autoComplete="off" onChange={HandleMail} />
                    <hr />
                    <div className="proceed">
                        <button type="submit">Proceed</button>
                        {display && (
                            <h3>Please enter correct credentials.</h3>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Forgot;