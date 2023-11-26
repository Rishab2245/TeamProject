import React from "react";
import tick from "../assets/tick.png";
import { Link } from "react-router-dom";
import "./Afterotp.css"

const AfterOtp = () => {
    return (
        <div className="after-otp">
            <div className="after-main">
                <figure>
                    <img src={tick} alt="" />
                </figure>
                <h2>Password Reset Successful.</h2>
                <h2>You can now proceed to login page</h2>
                <Link to={'/login'}>
                    <button>Login</button>
                </Link>
            </div>
        </div>
    )
}
export default AfterOtp;