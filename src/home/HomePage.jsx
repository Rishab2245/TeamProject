import React from 'react'
import './Homepg.css'
import Teamwork from "../assets/vecteezy_teamwork-or-team-building-office-business-meeting-vector_4154417-removebg-preview 1.png"
import Logo from "../assets/Logo_Teemify.png"

import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <nav>
                <div className="logo">
                    <div><img src={Logo} alt="" /></div>
                    <div> <h3>Teemify</h3></div>
                </div>
                <div className="homeNav">
                    <div><button className='hmb'>Home</button></div>
                    <div><button className='hmb'>Contact</button></div>
                    <div><button className='hmb'>About Us</button></div>
                </div>
                <div className="slbuttons">
                    <Link to={"/login"}>
                        <button className='login'>Log In</button>
                    </Link>
                    <Link to={"/signup"}>
                        <button className='signup'>Sign Up</button>
                    </Link>
                </div>
            </nav>
            <div className="heroSection">
                <div className="intro">
                    <h6>#Gettogether</h6>
                    <h1>More Accomplish <br />Together</h1>
                    <p>Collaborato, Manage Project and raach now
                        Productivity peacks.</p>
                    <button className='trialButton'>TRY FREE FOR 30 DAYS</button>
                    <div className="adjectives">
                        <div>
                            <div className='figures'>50+</div>
                            <div className='ftext'>Years <br /> Experience</div></div>
                        <div>
                            <div className='figures'>10M+</div>
                            <div className='ftext'>total<br /> active users</div>
                        </div></div>
                </div>
                <div className="illustration">
                    <img src={Teamwork} alt="" />
                </div>
            </div>
        </>
    )
}
export default Home
