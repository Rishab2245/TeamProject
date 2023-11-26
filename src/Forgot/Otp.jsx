import React from "react";
import otp from "../assets/otp.jpeg";
import "./Otp.css";
import Logo from "../assets/Logo.png"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Otp = () => {
    const [OTP,setOTP] = useState();
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    const [display,setDisplay] = useState(false);
    const [msg,setMsg] = useState("");
    const navigate = useNavigate();
    const HandleChange = (e) => {
        setDisplay(false);
        const {name , value} = e.target;
        if (name === 'otp'){
            setOTP(value);
        }
        else if (name === "newPassword"){
            setPassword(value);
        }
        else if (name === "confirm"){
            setConfirm(value);
        }
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirm){
            setDisplay(true);
        }
        else {
            try{
                await axios.post("https://teammanagement.onrender.com/api/user/password/resetPassword",{
                    "token" : `${OTP}`,
                    "password" : password,
                    "confirmPassword": confirm
                })
                navigate('/afterotp');
            }
            catch(error){
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
                </figure>
                <h1>&nbsp;Teemify</h1>
            </div>
            <div className="main">
                <h2>Reset Password</h2>
                <div className="container">
                    <form onSubmit={HandleSubmit}>
                        <div className="otp-container">
                            <div>
                                <label htmlFor="otp">Enter OTP</label>
                                <br />
                                <input type="text" name="otp" id="otp" required autoComplete="off" placeholder="OTP" onChange={HandleChange} />
                                <hr />
                            </div>
                            <div>
                                <label htmlFor="newPassword">Enter New Password</label>
                                <br />
                                <input type="password" name="newPassword" id="newPassword" required placeholder="Password" onChange={HandleChange} />
                                <hr />
                            </div>
                            <div>
                                <label htmlFor="confirm">Confirm Password</label>
                                <br />
                                <input type="password" name="confirm" id="confirm" placeholder="Confirm" required onChange={HandleChange}/>
                                <hr />
                            </div>
                            <div>
                                <button type="submit">Proceed</button>
                            </div>
                            <div>
                                {display && (
                                    <h3>{msg}</h3>
                                )}
                            </div>
                        </div>
                    </form>
                    <figure className="otp-image">
                        <img src={otp} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default Otp;