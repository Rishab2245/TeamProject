import React from "react";
import forgot from "../assets/ForgotPassword.webp"
import "./Forgot.css"
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"

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
            const response = await axios.post('https://teammanagement.onrender.com/api/user/password/resetEmail', {
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
                    <img src={Logo} alt="" />
                </figure>
                <h1>&nbsp;Teemify</h1>
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
                    <button type="submit">Proceed</button>
                    {display && (
                        <h3>Please enter correct credentials.</h3>
                    )}
                </form>
            </div>
        </div>
    )
}
export default Forgot;