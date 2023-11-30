import React from "react";
import Logo from "../assets/Logo.png"
import { useState } from "react";
import axios from "axios";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import Wave from "../wave/Wave.jsx"
import Nav from "../NavBar/Nav";
import login from "../assets/Login.png"

const Login = () => {
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();

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
            const response = await axios.post("https://teammanagement.onrender.com/api/user/login/", {
                "email": email,
                "password": password,
            })
            console.log(response);
            const userName = response.data.name;
            const token = response.headers.authorization
            navigate(`/dashboard`, { state: { id: 1, email: email, auth: token } });
        }
        catch (error) {
            console.error(error);
            setDisplay(true);
        }
    }
    return (
        <div className="login-signup-hero">
            <Nav />
            <div className="login-main">
                <form className="login-form" onSubmit={Submit}>
                    <h2>LOGIN</h2>
                    <input type="text" className="mail-input" placeholder="Email" onChange={HandleChange} name="email" autoComplete="off" />
                    <br />
                    <div>
                        <input type="password" className="password-input" placeholder="Password" onChange={HandleChange} name="password" />
                        <Link to={'/forgot'}>
                            <p>Forgot Password?</p>
                        </Link>
                    </div>
                    <br />
                    <button type="submit">LOGIN</button>
                </form>
                <figure >
                    <img src={login} alt="image" className="login-img" />
                </figure>
            </div>
            <div className="wave-class">
                <Wave />
            </div>
        </div>
    )
}
export default Login;