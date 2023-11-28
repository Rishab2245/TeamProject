import React from "react";
import otp from "../assets/forgot.png";
import "./Otp.css";
import Logo from "../assets/Logo.png"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Otp = () => {
    const [OTP, setOTP] = useState();
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [display, setDisplay] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const HandleChange = (e) => {
        setDisplay(false);
        const { name, value } = e.target;
        if (name === 'otp') {
            setOTP(value);
        }
        else if (name === "newPassword") {
            setPassword(value);
        }
        else if (name === "confirm") {
            setConfirm(value);
        }
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirm) {
            setDisplay(true);
        }
        else {
            try {
                await axios.post("https://teammanagement.onrender.com/api/user/password/resetPassword", {
                    "token": `${OTP}`,
                    "password": password,
                    "confirmPassword": confirm
                })
                navigate('/afterotp');
            }
            catch (error) {
                setDisplay(true)
                console.log(error);
                console.log(error.response.data.message);
                setMsg(error.response.data.message)
            }
        }
    }

    return (
        <div className="otp-hero">
            <div className="nav">
                <figure>
                    <img src={Logo} alt="" />
                    <h1>&nbsp;Teemify</h1>
                </figure>
                <div className="otp-nav">
                    <h2>Home</h2>
                    <h2>About Us</h2>
                    <h2>Home</h2>
                </div>
                <div className="otp-buttons">
                    <Link to={'/login'}>
                        <button id="otp-login">Login</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button>SignUp</button>
                    </Link>
                </div>
            </div>
            <div className="main">
                <figure className="otp-image">
                    <img src={otp} alt="" />
                </figure>
                <div className="container">
                    <h2>Reset Password</h2>
                    <form onSubmit={HandleSubmit}>
                        <div className="otp-container">
                            <div>
                                <input type="text" name="otp" id="otp" required autoComplete="off" placeholder="OTP" onChange={HandleChange} />
                            </div>
                            <div>
                                <input type="password" name="newPassword" id="newPassword" required placeholder="Password" onChange={HandleChange} className="password" />
                            </div>
                            <div>
                                <input type="password" name="confirm" id="confirm" placeholder="Confirm" required onChange={HandleChange} className="password" />
                            </div>
                            <div>
                                <button type="submit" id="proceed">Proceed</button>
                            </div>
                            <div>
                                {display && (
                                    <h3>{msg}</h3>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="171" viewBox="0 0 1512 171" fill="none">
                    <path d="M402.442 32.818C272.153 36.6527 78.7898 117.361 0.888649 170.008L1501.66 197.699C1524.38 132.061 1555.97 0.862285 1500.57 1.16896C1431.32 1.5523 1231.04 118.442 1014.51 119.641C797.986 120.839 565.303 28.0247 402.442 32.818Z" fill="url(#paint0_linear_542_45)" stroke="url(#paint1_linear_542_45)" stroke-width="1.18632" />
                    <defs>
                        <linearGradient id="paint0_linear_542_45" x1="25.4203" y1="108.483" x2="1531.84" y2="100.144" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#D9D9D9" />
                            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.69" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_542_45" x1="0.888799" y1="170.009" x2="1494.84" y2="170.784" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="#707070" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}
export default Otp;