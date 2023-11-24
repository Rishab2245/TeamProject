import React, { useEffect } from "react";
import axios from "axios";
import signup from "../assets/signup.png"
import Logo from "../assets/Logo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import "./Signup.css"
const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [display,setDisplay] = useState(false);
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
        catch (error){
            console.log(error.response.request.status);
            // const err = error.response.request.status;
            // console.log("Previously :",value);
            setDisplay(true);
        }
        console.log(display);
    }
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
                                <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" required={true} onChange={HandleChange} />
                                <hr />
                            </div>
                            <div>
                                <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" onChange={HandleChange} required={true} />
                                <hr />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" onChange={HandleChange} required={true} />
                                <hr />
                            </div>
                        </div>
                        <button onClick={Submit}>SIGN UP</button>
                        {display && (
                            <p>Please enter correct and unused account details.</p>
                        )}
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