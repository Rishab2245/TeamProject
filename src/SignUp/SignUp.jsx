import React, { useEffect } from "react";
import axios from "axios";
import login from "../assets/login.jpg"
import Logo from "../assets/Logo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import "./Signup.css"
import Nav from "../NavBar/Nav";
import Wave from "../wave/Wave";

const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        }
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
            const response = await axios.post("https://teammanagement.onrender.com/api/user/signup", {
                "name": name,
                "email": mail,
                "password": password
            })
            console.log(response.data.status);
            // console.log(value);
            setDisplay(false);
            navigate('/aftersignup');
        }
        catch (error) {
            console.log(error.response.request.status);
            // const err = error.response.request.status;
            // console.log("Previously :",value);
            setDisplay(true);
        }
        console.log(display);
    }
    return (
        <div className="signup-hero">
            <Nav />
            <div className="signup-main">
                <div className="container">
                    <form onSubmit={Submit} className="f-container">
                        <h2>SIGNUP</h2>
                        <div>
                            <input type="text" name="name" id="name" autoComplete="off" required={true} onChange={HandleChange} className="name-input" placeholder="Username" />
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" required={true} onChange={HandleChange} className="mail-input" />
                        </div>
                        <div>
                            <input type="password" name="password" id="password" placeholder="Password" required={true} onChange={HandleChange} className="password-input" />
                        </div>
                        <div className="buttons">
                            <button type="submit">SIGNUP</button>
                        </div>
                        {display && (
                            <h3 id="span">Please enter the correct credentials.</h3>
                        )}
                    </form>
                    <figure>
                        <img src={login} alt="Image" className="img" />
                    </figure>
                </div>
            </div>
            <div className="signup-wave">
                <Wave />
            </div>
        </div>
    )
}
export default SignUp;