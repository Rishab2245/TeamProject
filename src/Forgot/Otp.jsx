import React from "react";
import otp from "../assets/forgot.png";
import "./Otp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Wave from "../wave/Wave";

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
                const response = await axios.post("https://teammanagement.onrender.com/api/user/password/resetPassword", {
                    "token": `${OTP}`,
                    "password": password,
                    "confirmPassword": confirm
                })
                const token = response.headers.authorization
                navigate(`/dashboard`, { state: { id: 2, email: email, auth: token } });
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
            <Nav />
            <div className="main">
                <figure>
                    <img src={otp} alt="" className="otp-image" />
                </figure>
                <div className="container">
                    <form onSubmit={HandleSubmit}>
                        <div className="otp-container">
                            <h2>Reset Password</h2>
                            <div>
                                <input type="text" name="otp" id="otp" required autoComplete="off" placeholder="OTP" onChange={HandleChange} className="otp" />
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
            <div className="otp-wave">
                <Wave />
            </div>
        </div>
    )
}
export default Otp;