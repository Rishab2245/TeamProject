import React from "react";
import forgot from "../assets/forgot.png"
import "./Forgot.css"
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Wave from "../wave/Wave";

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
            navigate('/confirmOtp',{state:{id:2,email:email}});
        }
        catch (error) {
            console.error(error);
            setDisplay(true);
        }
    }
    return (
        <div className="forgot-hero">
            <Nav />
            <div className="main-container">
                <figure>
                    <img src={forgot} alt="" />
                </figure>
                <form className="forgot-form" onSubmit={HandleSubmit}>
                    <h2>Forgot Password</h2>
                    <input type="email" name="email" id="mail" required placeholder="Email" autoComplete="off" onChange={HandleMail} />
                    <hr />
                    <div className="proceed">
                        <button type="submit">Proceed</button>
                    </div>
                    {display && (
                        <h3>Please enter correct credentials.</h3>
                    )}
                </form>
            </div>
            <div className="forgot-wave">
                <Wave />
            </div>
        </div>
    )
}
export default Forgot;