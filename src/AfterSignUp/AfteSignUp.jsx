import React from "react";
import gmail from "../assets/gmail.jpeg"
import "./AfterSignUp.css"
import { Link } from "react-router-dom";
const AfterSignUp = () => {
    return(
        <div className="cont">
            <figure>
                <img src={gmail} alt="" />
            </figure>
            <h1>
                Email sent successfully.
                <br />
                Please verify your email and then login.
            </h1>
            <Link to="/login">
                <button>Proceed to Login</button>
            </Link>
        </div>
    )
}
export default AfterSignUp;