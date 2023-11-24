import React from "react";
import Logo from "../assets/Logo.png"
import { useState } from "react";
import axios from "axios";
import "./Login.css"
import login from "../assets/Login.png"
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");

    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setMail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    }
    const Submit = async () => {
        try {
            const response = await axios.post("https://teammanagement.onrender.com/api/user/login", {
                "email": email,
                "password": password,
            })
            console.log(response);
        }
        catch (error) {
            console.error(error);
        }
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
                <h2>Login</h2>
                <div className="container">
                    <form>
                        <div className="f-container">
                            <div>
                                <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" required={true} onChange={HandleChange} />
                                <hr />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" required={true} onChange={HandleChange} />
                                <hr />
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={Submit}>LOGIN</button>
                            <Link to={'/signup'}>
                                <button>Signup</button>
                            </Link>
                        </div>
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