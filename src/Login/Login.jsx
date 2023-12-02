import React from "react";
import Logo from "../assets/Logo.png"
import Todo from "../../TaskSection/Todo.jsx";
import { useState } from "react";
import axios from "axios";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import Wave from "../wave/Wave.jsx"
import Nav from "../NavBar/Nav";
import login from "../assets/Login.png"
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();

    const check = Cookies?.get('token')
    if (check){
        return (
            <Navigate to={'/dashboard'} />
        )
    }

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
            const token = response.headers.authorization;
            const userName = response.data.name;
            Cookies.set('token',token,{expires:7,path:'/'})
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
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1512 169" fill="none">
                    <path d="M401.354 32.818C271.066 36.6527 77.7019 117.361 -0.199241 170.008L1500.57 197.699C1523.29 132.061 1554.88 0.862285 1499.48 1.16896C1430.23 1.5523 1229.95 118.442 1013.42 119.641C796.898 120.839 564.216 28.0247 401.354 32.818Z" fill="url(#paint0_linear_542_43)" stroke="url(#paint1_linear_542_43)" strokeWidth="1.18632" />
                    <defs>
                        <linearGradient id="paint0_linear_542_43" x1="24.3324" y1="108.483" x2="1530.75" y2="100.144" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D9D9D9" />
                            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.69" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_542_43" x1="-0.199092" y1="170.009" x2="1493.76" y2="170.784" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#707070" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}
export default Login;